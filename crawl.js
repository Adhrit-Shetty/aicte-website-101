// var GoogleSearch = require('google-search');
// var googleSearch = new GoogleSearch({
//     key: 'AIzaSyByY0LYz7iKVvo3LBj0WZfizEHcsjGb0Z4',
//     cx: '007697043836410264545:xg7hwlv1qbk'
// });
//
//
// googleSearch.build({
//     q: "SAD",
//     filetype : ""
//      start: 1,
//     gl: "tr", //geolocation,
//     lr: "lang_tr",
//     num: 10, // Number of search results to return between 1 and 10, inclusive
//     siteSearch: "http://www.google.com" // Restricts results to URLs from a specified site
// }, function(error, response) {
//     if(error)
//         throw error;
//     console.log(response);
// });
var googleapis = require('googleapis');

// You can get a custom search engine id at
// https://www.google.com/cse/create/new
var CX = '007697043836410264545:xg7hwlv1qbk';
var API_KEY = 'AIzaSyByY0LYz7iKVvo3LBj0WZfizEHcsjGb0Z4';
var SEARCH = 'INSERT A GOOGLE REQUEST HERE';

// Sends the query to the API
function launchSearch (client, query, callback) {
    var req = client.customsearch.cse.list({cx : CX, q : query})
        .withApiKey(API_KEY);
    req.execute (function (err, response) {
        callback (err, response);
    });
}
console.log(googleapis
    .discover('customsearch', 'v1'));
// Initializes API
googleapis
    .discover('customsearch', 'v1')
    .execute (function (err, client) {
        if (err) {
            console.log('An error occured', err);
            return;
        }
        // Sends request
        launchSearch (client, SEARCH, function (err, response) {
            if (err) {
                console.log('An error occured', err);
                return;
            }
            // Got the response from custom search
            console.log('Got ' + response.searchInformation.formattedTotalResults + ' results');
            if (response.items.length > 0) {
                console.log('First result name is ' + response.items[0].title);
            }
        });
    });