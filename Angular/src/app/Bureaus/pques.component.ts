import {Component, OnInit} from '@angular/core';

import {data} from './Administration Bureau/Data/pques.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-pques',
  templateUrl: './pques.component.html',
  styleUrls: ['./pques.component.css'],
  providers: [GenerateBoxService]
})
export class PquesComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
