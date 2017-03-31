import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/instinindia.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-instinindia',
  templateUrl: './instinindia.component.html',
  styleUrls: ['./instinindia.component.css'],
  providers: [GenerateBoxService]
})
export class InstinindiaComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
