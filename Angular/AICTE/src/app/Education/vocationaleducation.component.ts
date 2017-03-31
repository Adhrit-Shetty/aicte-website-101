import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/vocationaleducation.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-vocationaleducation',
  templateUrl: './vocationaleducation.component.html',
  styleUrls: ['./vocationaleducation.component.css'],
  providers: [GenerateBoxService]
})
export class VocationaleducationComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
