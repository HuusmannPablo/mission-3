// Custom configuration from Azure 
// customconfig=97a80493-ccfb-4556-84cb-33529c545848
// endpoint: https://api.bing.microsoft.com/
// API Call: curl --header "Ocp-Apim-Subscription-Key: 612832a79ec845bb8345f0c4a604b10b" "https://api.bing.microsoft.com/v7.0/custom/search?q=car%20insurance&customconfig=97a80493-ccfb-4556-84cb-33529c545848&mkt=en-NZ"
// var subscriptionKey = '0548b064c021470abc12887aca703dd6';

const request = require("request");

const subscriptionKey = 'c27b944e953b46cc8a42576693950f22';
const customConfigId = '97a80493-ccfb-4556-84cb-33529c545848';
const searchTerm = 'car%20insurance';

const info = {
    url: 'https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?' + 
        'q=' + searchTerm + "&" +
        'customconfig=' + customConfigId,
    headers: {
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
}

request(info, function(error, response, body){
    let searchResponse = JSON.parse(body);
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    for(let i = 0; i < searchResponse.webPages.value.length; ++i){
        let webPage = searchResponse.webPages.value[i];
        console.log('name: ' + webPage.name);
        console.log('url: ' + webPage.url);
        console.log('displayUrl: ' + webPage.displayUrl);
        console.log('snippet: ' + webPage.snippet);
        console.log('dateLastCrawled: ' + webPage.dateLastCrawled);
        console.log();
    }
})