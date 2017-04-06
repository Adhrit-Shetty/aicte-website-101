import { Component } from '@angular/core';
import { HttpService } from "../../Shared/Services/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../Shared/Services/auth.service";

@Component({
  selector: 'aicte-addinsty',
  templateUrl: './addinsty.component.html',
  styleUrls: ['./addinsty.component.css']
})
export class AddinstyComponent {
  valid: {response: string, check: boolean} ;
    myForm: FormGroup;
  
  constructor (private http: HttpService,
                  private formBuilder: FormBuilder,
                  private auth: AuthService) {
     this.myForm = formBuilder.group({
       'name': ['',[ Validators.required ]],
       'year': ['', [ Validators.required ]],
       'Intake': ['', [ Validators.required ]],
       'Enrolled': ['', [ Validators.required ]],
       'Passed': ['', [ Validators.required ]],
       'Placed': ['', [ Validators.required ]]
     });
     this.valid = {
               response: '',
               check: false
             };
   }
    
    request:any;
    onSubmit(data: any) {
      console.log(data);
      this.request = {
        username: data.username,
        password: data.password
      };
      this.addInstitute(this.request);
    }
    
    addInstitute(request: any) {
      this.http.addInstitute(this.auth.getToken(),request)
            .subscribe((data) => {console.log(data);} );
    }
}
