import {Component, OnInit} from '@angular/core';

import {data} from './Administration Bureau/Data/rifd.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-rifd',
  templateUrl: './rifd.component.html',
  styleUrls: ['./rifd.component.css'],
  providers: [GenerateBoxService]
})
export class RifdComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
