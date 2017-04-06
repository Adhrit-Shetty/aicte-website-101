import { Component } from '@angular/core';
import { HttpService } from "../../Shared/Services/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../Shared/Services/auth.service";

@Component({
  selector: 'aicte-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  myForm: FormGroup;
  request: any;
  valid: {response: string, check: boolean} ;
  
  constructor (private http: HttpService,
               private formBuilder: FormBuilder,
               private auth: AuthService) {
    //Form controls
    this.myForm = formBuilder.group ({
        'username': [ '', [ Validators.required ] ],
        'password': [ '', [ Validators.required ] ],
        'confirmpassword': [ '', [ Validators.required ] ]
      }
    );
    this.valid = {
          response: '',
          check: false
        };
  }
  
  onSubmit(data: any) {
    if(data.password === data.confirmpassword) {
      this.request = {
            username: data.username,
            password: data.password
          };
      this.registerUser(this.request);
    }
    else{
      this.valid = {
        response: 'Password and Confirm Password must be Identical!',
        check: false
      };
      this.myForm.reset();
    }
  }
  
  registerUser(request: any) {
    this.http.registerUser(this.auth.getToken(),request)
      .subscribe((data) => {console.log(data);} );
  }
}
