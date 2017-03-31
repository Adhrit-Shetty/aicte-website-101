import { Component, OnInit } from '@angular/core';

import { data } from './Data/photogallery.data';
import { GenerateBoxService } from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css'],
  providers: [GenerateBoxService]
})
export class PhotogalleryComponent implements OnInit {
  data = data;
  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }

}
