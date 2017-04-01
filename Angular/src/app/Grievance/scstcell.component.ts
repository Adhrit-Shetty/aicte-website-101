import {Component, OnInit} from '@angular/core';

import {data} from './Data/scstcell.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-scstcell',
  templateUrl: './scstcell.component.html',
  styleUrls: ['./scstcell.component.css'],
  providers: [GenerateBoxService]
})
export class ScstcellComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
