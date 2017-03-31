import { Component, OnInit } from '@angular/core';

import { data } from './Use of ICT/Data/libraryservices.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-libraryservices',
  templateUrl: './libraryservices.component.html',
  styleUrls: ['./libraryservices.component.css'],
  providers: [GenerateBoxService]
})
export class LibraryservicesComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
