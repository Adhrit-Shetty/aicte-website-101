import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { AuthService } from "./Shared/Services/auth.service";

declare var $: any;

@Component({
  selector: 'aicte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router,private auth: AuthService) {}

  ngOnInit() {
    
    console.log(localStorage.getItem('cookie'));
    if(!localStorage.getItem('cookie'))
    {
      console.log("no c set c");
      this.auth.setCookie();
    }
    else console.log("got c");
    /* smooth scrolling for scroll to top */
    
    $('.scroll-top').click(function (e) {
      $('.scroll-top a').blur();
      $('body,html').animate({scrollTop: 0}, 1000);
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
