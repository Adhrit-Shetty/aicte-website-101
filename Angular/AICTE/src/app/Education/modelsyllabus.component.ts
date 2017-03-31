import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/modelsyllabus.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-modelsyllabus',
  templateUrl: './modelsyllabus.component.html',
  styleUrls: ['./modelsyllabus.component.css'],
  providers: [GenerateBoxService]
})
export class ModelsyllabusComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
