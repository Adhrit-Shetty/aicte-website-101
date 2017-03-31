import {Component, OnInit} from '@angular/core';

import {data} from './Data/antirag.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-antirag',
  templateUrl: './antirag.component.html',
  styleUrls: ['./antirag.component.css'],
  providers: [GenerateBoxService]
})
export class AntiragComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
