import { Component, OnInit } from '@angular/core';

import {GenerateBoxService} from "../../Shared/Services/generate-box.service";
import {data} from './Data/ictedu.data';

@Component({
  selector: 'aicte-ictinedu',
  templateUrl: './ictinedu.component.html',
  styleUrls: ['./ictinedu.component.css'],
  providers: [GenerateBoxService]
})
export class IctineduComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }


  ngOnInit() {
    this.generate.load(this.data);
  }

}
