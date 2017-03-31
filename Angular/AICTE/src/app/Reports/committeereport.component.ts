import { Component, OnInit } from '@angular/core';

import { data } from './Data/committeereport.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-committeereport',
  templateUrl: './committeereport.component.html',
  styleUrls: ['./committeereport.component.css'],
  providers: [GenerateBoxService]
})
export class CommitteereportComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
