import {Component, OnInit} from '@angular/core';

import {data} from './Data/adminb.data';
import {GenerateBoxService} from "../../Shared/Services/generate-box.service";


@Component({
  selector: 'aicte-adminb',
  templateUrl: './adminb.component.html',
  styleUrls: ['./adminb.component.css'],
  providers: [GenerateBoxService]
})
export class AdminbComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
  }

}
