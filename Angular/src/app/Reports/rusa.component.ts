import {Component, OnInit} from '@angular/core';

import {data} from './Data/rusa.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-rusa',
  templateUrl: './rusa.component.html',
  styleUrls: ['./rusa.component.css'],
  providers: [GenerateBoxService]
})
export class RusaComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
