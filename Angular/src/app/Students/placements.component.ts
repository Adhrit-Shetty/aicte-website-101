import {Component, OnInit} from '@angular/core';

import {data} from './Data/placements.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css'],
  providers: [GenerateBoxService]
})
export class PlacementsComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
