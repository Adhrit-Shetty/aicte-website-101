import { Component, OnInit } from '@angular/core';
import {GenerateBoxService} from "../../Shared/Services/generate-box.service";
import {data} from './Data/mobileedu.data';
@Component({
  selector: 'aicte-mobileedu',
  templateUrl: './mobileedu.component.html',
  styleUrls: ['./mobileedu.component.css'],
  providers: [GenerateBoxService]
})
export class MobileeduComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }


  ngOnInit() {
    this.generate.load(this.data);
  }
}
