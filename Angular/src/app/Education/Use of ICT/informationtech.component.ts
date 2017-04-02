import { Component, OnInit } from '@angular/core';

import {GenerateBoxService} from "../../Shared/Services/generate-box.service";
import {data} from './Data/informationtech.data';

@Component({
  selector: 'aicte-informationtech',
  templateUrl: './informationtech.component.html',
  styleUrls: ['./informationtech.component.css'],
  providers: [GenerateBoxService]
})
export class InformationtechComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }


  ngOnInit() {
    this.generate.load(this.data);
  }

}
