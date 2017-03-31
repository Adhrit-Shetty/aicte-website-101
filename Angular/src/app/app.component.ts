import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'aicte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    $('.scroll-top').click(function (e) {
      $('.scroll-top a').blur();
      $('body,html').animate({scrollTop: 0}, 1000, "easeInOutExpo");
      e.preventDefault();
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }
}
