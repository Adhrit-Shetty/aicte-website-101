import {Component, OnInit} from '@angular/core';

import {data} from './Data/tenders.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css'],
  providers: [GenerateBoxService]
})
export class TendersComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
