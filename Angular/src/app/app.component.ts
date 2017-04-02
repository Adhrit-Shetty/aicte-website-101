import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare var $: any;
declare var Tour:any;
@Component({
  selector: 'aicte-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
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

    (function () {

      var tour = new Tour({

        backdrop: true,
        onEnd: function () {
          $('.scroll-top').click();
        },
        template: `
             <div class='popover tour'>
                 <div class='arrow'></div>
                 <h3 class='popover-title'></h3>
                 <div class='popover-content'></div>
                 <div class='popover-navigation text-center'>
                 <button class='btn btn-info btn-raised' data-role='prev'>Prev</button>
                 <span data-role='separator'>|</span>
                 <button class='btn btn-info btn-raised' data-role='next'>Next</button>
             </div>
             <button class='btn btn-default btn-raised btn-block' data-role='end'>End tour</button>
             </div>
             `
      });

      tour.addSteps([
        {
          element: "#brand",
          placement: "bottom",
          title: "Hi! Welcome",
          content: "I will navigate you through the site."
        },
        {
          element: "#stakeholderPop",
          placement: "top",
          title: "Our Stakeholders",
          content: "Click on any one of the links to direct."
        },
        {
          element: "#announcePop",
          placement: "left",
          title: "Announcements",
          content: "Here you can see upcoming events."
        },
        {
          element: "#bulletinPop",
          placement: "top",
          title: "Bulletin Board",
          content: "Here you can know about the Ads, Jobs, Circular and Tender."
        },
        {
          element: "#recentPop",
          placement: "top",
          title: "Recent Links",
          content: "Here are the Recent Links added to AICTE"
        }
      ]);
      // Initialize the tour
      tour.init();
      // Start the tour
      tour.start();
    }());




  }
}
