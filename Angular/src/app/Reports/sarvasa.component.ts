import {Component, OnInit} from '@angular/core';

import {data} from './Data/sarvasa.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-sarvasa',
  templateUrl: './sarvasa.component.html',
  styleUrls: ['./sarvasa.component.css'],
  providers: [GenerateBoxService]
})
export class SarvasaComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
