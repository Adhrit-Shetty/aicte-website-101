var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
    key: 'AIzaSyByY0LYz7iKVvo3LBj0WZfizEHcsjGb0Z4',
    cx: '007697043836410264545:xg7hwlv1qbk'
});


googleSearch.build({
    q: "SAD",
    start: 5,
    fileType: "pdf",
    gl: "tr", //geolocation,
    lr: "lang_tr",
    num: 10, // Number of search results to return between 1 and 10, inclusive
    siteSearch: "http://www.google.com" // Restricts results to URLs from a specified site
}, function(error, response) {
    console.log(response);
});