import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'aicte-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.css'],
})
export class NavhomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    /**********Material**********/
    $.material.init();
    /**************Navbar***************/
    $('#fullNav').affix({
      offset: {
        top: $('#brand').height()
      }
    });


    $('#fullNav').on('affix.bs.affix', function () {
      $('main').addClass('pushDown');
      $('#miniNav').removeClass('not-top');
    });

    $('#fullNav').on('affix-top.bs.affix', function () {
      $('main').removeClass('pushDown');
      $('#miniNav').addClass('not-top');
    });

    $(document).ready(function () {
      var sideslider = $('[data-toggle=collapse-side]');
      var sel = sideslider.attr('data-target');
      var sel2 = sideslider.attr('data-target-2'),
        scrolled = [];
      sideslider.click(function (event) {
        event.stopPropagation();
        $(sel).toggleClass('in');
        $(sel2).toggleClass('out');
        scrolled.push($(window).scrollTop());
        $('#fullNav').toggleClass('navbar-fixed-top');
        $('#fullNav').toggleClass('affix-top');
        $('#miniNav').toggleClass('not-top');
        $('body').toggleClass('noscroll opaque');
      });

      $(document).click(function (event) {
        var clickover = $(event.target);
        event.stopPropagation();
        var _opened = $("body").hasClass("noscroll opaque");
        if (_opened === true && !clickover.hasClass("navbar-toggle") && !clickover.hasClass('navbar-fixed-top') && !clickover.hasClass('input-group') && !clickover.hasClass('form-control')) {
          $("#collapse-menu").click();
          $('body,html').animate({scrollTop: scrolled[0]}, 0);
          scrolled = [];
        }
      });
    });

    $('#fullNav').on('affixed-top.bs.affix', function () {
      if ($('#fullNav').hasClass('navbar-fixed-top')) {
        $('#fullNav').removeClass('affix-top');
        $('#miniNav').toggleClass('not-top');
      }
    });


    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function () {
      $(this).find(".fa-caret-down").toggleClass("fa-caret-up");
    });

    $('#collapse-menu').click(function () {
      $('#bar1').toggleClass('top-bar');
      $('#bar2').toggleClass('middle-bar');
      $('#bar3').toggleClass('bottom-bar');
    });


  }

}
