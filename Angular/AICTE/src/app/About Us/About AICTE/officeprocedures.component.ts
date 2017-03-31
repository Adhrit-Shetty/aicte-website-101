import { Component, OnInit } from '@angular/core';

import { data } from './Data/officeprocedures.data';
import { GenerateBoxService } from "../../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-officeprocedures',
  templateUrl: './officeprocedures.component.html',
  styleUrls: ['./officeprocedures.component.css'],
  providers: [GenerateBoxService]
})
export class OfficeproceduresComponent implements OnInit {
  data=data;
  constructor(private generate: GenerateBoxService) {}


  ngOnInit() {
    this.generate.load(this.data);
  }

}
