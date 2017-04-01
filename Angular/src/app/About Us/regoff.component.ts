import {Component, OnInit} from '@angular/core';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

import {data} from './About AICTE/Data/regionaloffice.data';

@Component({
  selector: 'aicte-regoff',
  templateUrl: './regoff.component.html',
  styleUrls: ['./regoff.component.css'],
  providers: [GenerateBoxService]
})
export class RegoffComponent implements OnInit {

  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
  }
}
