import {Component, OnInit} from '@angular/core';

import {data} from './Data/startuppolicy.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-startuppolicy',
  templateUrl: './startuppolicy.component.html',
  styleUrls: ['./startuppolicy.component.css'],
  providers: [GenerateBoxService]

})
export class StartuppolicyComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
