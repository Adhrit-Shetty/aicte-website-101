import {Component, OnInit} from '@angular/core';

import {data} from './Use of ICT/Data/instinindia.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-finishingschools',
  templateUrl: './finishingschools.component.html',
  styleUrls: ['./finishingschools.component.css'],
  providers: [GenerateBoxService]
})
export class FinishingschoolsComponent implements OnInit {

  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
