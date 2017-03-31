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


/* smooth scrolling for scroll to top */



