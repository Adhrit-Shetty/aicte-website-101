import { Component, OnInit } from '@angular/core';

import { data } from './Data/cvc.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-cvc',
  templateUrl: './cvc.component.html',
  styleUrls: ['./cvc.component.css'],
  providers: [GenerateBoxService]
})
export class CvcComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
