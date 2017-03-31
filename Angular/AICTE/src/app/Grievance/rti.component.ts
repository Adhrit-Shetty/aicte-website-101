import { Component, OnInit } from '@angular/core';

import { data } from './Data/rti.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-rti',
  templateUrl: './rti.component.html',
  styleUrls: ['./rti.component.css'],
  providers: [GenerateBoxService]
})
export class RtiComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
