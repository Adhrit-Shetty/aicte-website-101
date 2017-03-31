import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/projectfactory.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-projectfactory',
  templateUrl: './projectfactory.component.html',
  styleUrls: ['./projectfactory.component.css'],
  providers: [GenerateBoxService]
})
export class ProjectfactoryComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
