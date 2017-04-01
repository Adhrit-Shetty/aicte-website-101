import {Component, OnInit} from '@angular/core';

import {data} from './Administration Bureau/Data/appb.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-appb',
  templateUrl: './appb.component.html',
  styleUrls: ['./appb.component.css'],
  providers: [GenerateBoxService]
})
export class AppbComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
