import {Component, OnInit} from '@angular/core';

import {data} from './Data/loans.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
  providers: [GenerateBoxService]

})
export class LoansComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
