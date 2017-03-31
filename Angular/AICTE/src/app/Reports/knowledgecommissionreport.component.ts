import { Component, OnInit } from '@angular/core';

import { data } from './Data/knowledgecommissionreport.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-knowledgecommissionreport',
  templateUrl: './knowledgecommissionreport.component.html',
  styleUrls: ['./knowledgecommissionreport.component.css'],
  providers: [GenerateBoxService]
})
export class KnowledgecommissionreportComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
