import { Component, OnInit } from '@angular/core';

import { data } from './Data/circulars.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-circulars',
  templateUrl: './circulars.component.html',
  styleUrls: ['./circulars.component.css'],
  providers: [GenerateBoxService]
})
export class CircularsComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
