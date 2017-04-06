import { Component, OnInit } from '@angular/core';
import { HttpService } from "../Shared/Services/http.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../Shared/Services/auth.service";
import { AuthGuard } from "../Shared/Services/auth.guard";

@Component({
  selector: 'aicte-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ HttpService ]
})
export class LoginComponent implements OnInit{
  //Form variables
  myForm: FormGroup;
  userData: FormGroup;
  request: any;
  valid: {response: string, check: boolean} ;
  
  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private auth: AuthService) {
    //Form controls
    this.myForm = formBuilder.group({
      'username': ['',[Validators.required]],
      'password': ['',[Validators.required]]
    });
    this.valid = {
      response: '',
      check: false
    };
  }
  
  ngOnInit(){
    if(this.auth.isLoggedIn()) {
      console.log("LOGGED IN ALREADY BHAI");
      console.log(this.auth.isLoggedIn());
      this.auth.navigateTo('/administrator_page');
    }
  }
  
  onSubmit(data: any) {
    this.request = {
      username: data.username,
      password: data.password
    };
    this.verifyUser(this.request);
  }
  
  verifyUser(request: any) {
    this.http.verifyUser(request)
      .subscribe(
        (data) => {
          console.log(data);
          if(data === "Already logged in") {
            console.log("Logged in");
            this.valid.check = false;
            this.valid.response = "Already Logged In!";
          }
          else
          if(data === "Unauthorized"){
            console.log("Unauthorized");
            this.valid.check = false;
            this.valid.response = "Unauthorized attempt!";
          }
          else
          if(data.success){
            console.log("ASDAD");
            this.valid.check = true;
            this.valid.response = "Valid User!";
            this.auth.loggedIn({name: this.request.username, userdata: data});
            this.auth.navigateTo('/administrator_page');
          }
        }
      )
  }
  /*valid(group: FormGroup): {[key: string]: any} {
     return new Promise(
       (resolve, reject) => {
         if(group.controls['password'].touched){
           console.log(group);
           
         }
         resolve(null);
         /*setTimeout(
           () => {
             console.log ("WORKING");
             if (control.value === 'Example') {
               console.log ("SAHI");
               resolve (null);
             } else {
               resolve ({ 'invalid': true });
             }
           },10000)
       }
     );
   }*/
}
