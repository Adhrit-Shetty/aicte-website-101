import {Component, OnInit} from '@angular/core';

import {data} from './Administration Bureau/Data/acadb.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-acadb',
  templateUrl: './acadb.component.html',
  styleUrls: ['./acadb.component.css'],
  providers: [GenerateBoxService]
})
export class AcadbComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
