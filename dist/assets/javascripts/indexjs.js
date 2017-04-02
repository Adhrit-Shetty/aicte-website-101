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

