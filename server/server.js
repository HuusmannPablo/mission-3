// Custom configuration from Azure
// customconfig=97a80493-ccfb-4556-84cb-33529c545848
// endpoint: https://api.bing.microsoft.com/
// API Call: curl --header "Ocp-Apim-Subscription-Key: 612832a79ec845bb8345f0c4a604b10b" "https://api.bing.microsoft.com/v7.0/custom/search?q=car%20insurance&customconfig=97a80493-ccfb-4556-84cb-33529c545848&mkt=en-NZ"
// var subscriptionKey = '0548b064c021470abc12887aca703dd6';

const request = require("request");

const subscriptionKey = "6f86aa72480946c890e359fb1047372c";
const customConfigId = "97a80493-ccfb-4556-84cb-33529c545848";
const endpoint =
  "https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?";
// Word(s) you want to search for.
var query = "Microsoft";
// Market you want to search in.
let mkt = "en-US";

// <requestOptions>
// Construct parameters
let request_params = {
  uri: endpoint,
  headers: {
    "Ocp-Apim-Subscription-Key": subscriptionKey,
  },
  qs: {
    customConfig: customConfigId,
    q: query,
    mkt: mkt,
  },
  json: true,
};
// </requestOptions>

// <requestMethod>
// Make request
request(request_params, function (error, response, body) {
  console.error("error:", error);
  console.log("statusCode:", response && response.statusCode);

  console.log(body.queryContext);
  console.log();
  body.webPages.value.forEach((v) => {
    console.log(v);
  });
});
