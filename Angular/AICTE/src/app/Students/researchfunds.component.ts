import { Component, OnInit } from '@angular/core';

import { data } from './Data/researchfunds.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-researchfunds',
  templateUrl: './researchfunds.component.html',
  styleUrls: ['./researchfunds.component.css'],
  providers: [GenerateBoxService]
})
export class ResearchfundsComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
