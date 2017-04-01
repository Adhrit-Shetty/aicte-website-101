import {Component, OnInit} from '@angular/core';

import {data} from './Data/wtbae.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-wtbae',
  templateUrl: './wtbae.component.html',
  styleUrls: ['./wtbae.component.css'],
  providers: [GenerateBoxService]
})
export class WtbaeComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
