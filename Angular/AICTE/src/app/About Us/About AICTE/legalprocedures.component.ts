import { Component, OnInit } from '@angular/core';

import { data } from './Data/legalprocedures.data';
import { GenerateBoxService } from "../../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-legalprocedures',
  templateUrl: './legalprocedures.component.html',
  styleUrls: ['./legalprocedures.component.css'],
  providers: [GenerateBoxService]
})
export class LegalproceduresComponent implements OnInit {
  data=data;
  constructor(private generate: GenerateBoxService) {}


  ngOnInit() {
    this.generate.load(this.data);
  }
}
