import {Component, OnInit} from '@angular/core';
import {data} from './Data/useofaicte.data';
import {GenerateBoxService} from "../../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-useofict',
  templateUrl: './useofict.component.html',
  styleUrls: ['./useofict.component.css'],
  providers: [GenerateBoxService]
})
export class UseofictComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
   this.generate.load(this.data);
  }

}
