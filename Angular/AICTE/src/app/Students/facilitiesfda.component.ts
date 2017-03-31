import { Component, OnInit } from '@angular/core';

import { data } from './Data/facilitiesfda.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-facilitiesfda',
  templateUrl: './facilitiesfda.component.html',
  styleUrls: ['./facilitiesfda.component.css'],
  providers: [GenerateBoxService]
})
export class FacilitiesfdaComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
