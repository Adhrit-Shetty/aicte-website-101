import { Component, OnInit } from '@angular/core';

import { data } from './Data/admissions.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css'],
  providers: [GenerateBoxService]
})
export class AdmissionsComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
