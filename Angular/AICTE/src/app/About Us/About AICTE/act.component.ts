import { Component, OnInit } from '@angular/core';

import { data } from './Data/act.data';
import { GenerateBoxService } from "../../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css'],
  providers: [GenerateBoxService]
})
export class ActComponent implements OnInit {
  data=data;
  constructor(private generate: GenerateBoxService) {}


  ngOnInit() {
    this.generate.load(this.data);
  }

}
