import { Component, OnInit } from '@angular/core';

import { data } from './Data/vigilanceprocedures.data';
import { GenerateBoxService } from "../../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-vigilanceprocedures',
  templateUrl: './vigilanceprocedures.component.html',
  styleUrls: ['./vigilanceprocedures.component.css'],
  providers: [GenerateBoxService]
})
export class VigilanceproceduresComponent implements OnInit {
  data=data;
  constructor(private generate: GenerateBoxService) {}


  ngOnInit() {
    this.generate.load(this.data);
  }
}
