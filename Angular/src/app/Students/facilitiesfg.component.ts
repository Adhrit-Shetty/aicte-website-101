import {Component, OnInit} from '@angular/core';

import {data} from './Data/facilitiesfg.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-facilitiesfg',
  templateUrl: './facilitiesfg.component.html',
  styleUrls: ['./facilitiesfg.component.css'],
  providers: [GenerateBoxService]
})
export class FacilitiesfgComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
