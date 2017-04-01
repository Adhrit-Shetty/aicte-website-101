import {Component, OnInit} from '@angular/core';

import {data} from './Data/pubgriev.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-pubgriev',
  templateUrl: './pubgriev.component.html',
  styleUrls: ['./pubgriev.component.css'],
  providers: [GenerateBoxService]
})
export class PubgrievComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
