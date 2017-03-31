import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common'


import {Box} from "../Shared/box";
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css'],

})
export class Temp1Component implements OnInit {
  data: Box[];

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.data = this.generate.get();
  }
}
