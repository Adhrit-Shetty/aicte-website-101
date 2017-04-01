import {Component, OnInit} from '@angular/core';

import {data} from './Data/ethics.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-ethics',
  templateUrl: './ethics.component.html',
  styleUrls: ['./ethics.component.css'],
  providers: [GenerateBoxService]

})
export class EthicsComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
