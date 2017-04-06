import { Component} from '@angular/core';

import { HttpService } from "../../Shared/Services/http.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../Shared/Services/auth.service";


@Component({
  selector: 'aicte-addinst',
  templateUrl: './addinst.component.html',
  styleUrls: ['./addinst.component.css']
})
export class AddinstComponent {
  valid: {response: string, check: boolean} ;
  myForm: FormGroup;

  constructor (private http: HttpService,
                    private formBuilder: FormBuilder,
                    private auth: AuthService) {
       this.myForm = formBuilder.group({
         'name': ['',[ Validators.required ]],
         'insttype': ['', [ Validators.required ]],
         'minority': ['', [ Validators.required ]],
         'women': ['', [ Validators.required ]],
         'ApprovalStatus': ['', [ Validators.required ]]
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
      name: data.name,
      intake: data.Intake,
      enrolled: data.Enrolled,
      passed: data.Passed,
      placed: data.Placed,
      y: data.year
      }
    this.addInstituteYear(this.request);
  }
  
  addInstituteYear(request: any) {
    this.http.addInstitute(this.auth.getToken(),this.request)
          .subscribe((data) => {console.log(data);} );
  }

}
