import { Component, OnInit } from '@angular/core';

import { data } from './Data/annualreport.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-annualreport',
  templateUrl: './annualreport.component.html',
  styleUrls: ['./annualreport.component.css'],
  providers: [GenerateBoxService]
})
export class AnnualreportComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
