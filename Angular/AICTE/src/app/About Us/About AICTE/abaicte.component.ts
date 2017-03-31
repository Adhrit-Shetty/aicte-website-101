import { Component, OnInit } from '@angular/core';
import { data } from './Data/abaicte.data';
import { GenerateBoxService } from "../../Shared/Services/generate-box.service";


@Component({
  selector: 'aicte-abaicte',
  templateUrl: './abaicte.component.html',
  styleUrls: ['./abaicte.component.css'],
  providers: [GenerateBoxService]
})
export class AbaicteComponent implements OnInit{
  data = data;

  constructor(private generate: GenerateBoxService) {}

  ngOnInit() {
    this.generate.load(this.data);
  }


}
