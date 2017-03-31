import { Component, OnInit } from '@angular/core';

import { data } from './About AICTE/Data/faculty.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-fac',
  templateUrl: './fac.component.html',
  styleUrls: ['./fac.component.css'],
  providers: [GenerateBoxService]
})
export class FacComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
