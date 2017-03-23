//Internet Explorer 10 in Windows Phone 8
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    );
    document.head.appendChild(msViewportStyle)
}
//Android stock Browser
$(function () {
    var nua = navigator.userAgent;
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
});

/*********Ripple Js********/
$.ripple(".btn", {
    debug: false, // Turn Ripple.js logging on/off
    on: 'mousedown', // The event to trigger a ripple effect

    opacity: 0.4, // The opacity of the ripple
    color: "auto", // Set the background color. If set to "auto", it will use the text color
    multi: false, // Allow multiple ripples per element

    duration: 0.7, // The duration of the ripple

    // Filter function for modifying the speed of the ripple
    rate: function (pxPerSecond) {
        return pxPerSecond;
    },

    easing: 'linear' // The CSS3 easing function of the ripple
});
/**********Material**********/
$.material.init();

/***********Offcanvas**************/
$('.navmenu-brand').click(function () {
    $('.navmenu').offcanvas('hide');
});

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
        console.log($(window).scrollTop());
        scrolled.push($(window).scrollTop());
        $('#fullNav').toggleClass('navbar-fixed-top');
        $('#fullNav').toggleClass('affix-top');
        $('#miniNav').toggleClass('not-top');
        $('body').toggleClass('noscroll opaque');
        console.log("Chana:", scrolled[0]);
    });

    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("body").hasClass("noscroll opaque");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            event.stopPropagation();
            $("#collapse-menu").click();
            console.log("Click:", scrolled);
            $('body,html').animate({scrollTop: scrolled[0]}, 0);
            scrolled = [];
        }
    });
});

$('#collapse-menu').click(function () {
    $('#bar1').toggleClass('top-bar');
    $('#bar2').toggleClass('middle-bar');
    $('#bar3').toggleClass('bottom-bar');
});
/********************/
