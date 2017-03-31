import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/collaborations.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css'],
  providers: [GenerateBoxService]
})
export class CollaborationsComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
