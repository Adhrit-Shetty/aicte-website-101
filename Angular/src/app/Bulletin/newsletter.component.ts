import {Component, OnInit} from '@angular/core';

import {data} from './Data/newsletter.data';
import {GenerateBoxService} from "../Shared/Services/generate-box.service";

@Component({
  selector: 'aicte-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  providers: [GenerateBoxService]
})
export class NewsletterComponent implements OnInit {
  data = data;

  constructor(private generate: GenerateBoxService) {
  }

  ngOnInit() {
    this.generate.load(this.data);
    console.log(this.data);
  }
}
