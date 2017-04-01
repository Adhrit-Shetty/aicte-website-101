import {Component, OnInit} from '@angular/core';

import {data} from './Data/scholarships.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css'],
  providers: [GenerateBoxService]
})
export class ScholarshipsComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
