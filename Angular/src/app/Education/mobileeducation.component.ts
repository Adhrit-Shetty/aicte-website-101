import {Component, OnInit} from '@angular/core';

import {data} from './Use of ICT/Data/mobileeducation.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-mobileeducation',
  templateUrl: './mobileeducation.component.html',
  styleUrls: ['./mobileeducation.component.css'],
  providers: [GenerateBoxService]
})
export class MobileeducationComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

 }
