import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/distanceeducation.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-distanceeducation',
  templateUrl: './distanceeducation.component.html',
  styleUrls: ['./distanceeducation.component.css'],
  providers: [GenerateBoxService]
})
export class DistanceeducationComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
