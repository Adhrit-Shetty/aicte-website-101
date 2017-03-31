import { Component, OnInit } from '@angular/core';

import { data } from './Data/delegation.data';
import { GenerateBoxService } from "../../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-delegation',
  templateUrl: './delegation.component.html',
  styleUrls: ['./delegation.component.css'],
  providers: [GenerateBoxService]
})
export class DelegationComponent implements OnInit {
  data=data;
  constructor(private generate: GenerateBoxService) {}


  ngOnInit() {
    this.generate.load(this.data);
  }

}
