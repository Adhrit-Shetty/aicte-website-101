import {Component, OnInit} from '@angular/core';

import {data} from './Administration Bureau/Data/finb.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-finb',
  templateUrl: './finb.component.html',
  styleUrls: ['./finb.component.css'],
  providers: [GenerateBoxService]
})
export class FinbComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
