import { Component, OnInit } from '@angular/core';

import { data } from './Data/awards.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  providers: [GenerateBoxService]
})
export class AwardsComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
