import {Component, OnInit} from '@angular/core';

import { data } from './Administration Bureau/Data/pcb.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-pcb',
  templateUrl: './pcb.component.html',
  styleUrls: ['./pcb.component.css'],
  providers: [GenerateBoxService]
})
export class PcbComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
