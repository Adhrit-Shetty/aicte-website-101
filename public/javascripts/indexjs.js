//Internet Explorer 10 in Windows Phone 8
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
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
/**********Material**********/
$.material.init();

/**************Navbar***************/
$('#fullNav').affix({
    offset: {
        top: $('#brand').outerHeight()
        // top: function(){
        //     console.log($(window).width());
        //     if($(window).width() >= 768)
        //         return (this.top=$('#brand').outerHeight());
        //     else return (this.top=$('#brand').height());
        // }
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

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function (e) {
    $('.scroll-top a').blur();
    $('body,html').animate({scrollTop: 0}, 1000);
    e.preventDefault();
});


