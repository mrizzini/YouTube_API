// API WALKTHROUGH

// //1

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// xhr.send();

// console.log(xhr.status);
// console.log(xhr.statusText);

// //3

// // You (the client) make an HTTP request. What sends the response?

// // A: The Internet
// // B: The World Wide Web
// // C: The server
// // D: The waiter

// var answer = "C";

// //5

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// // Add your code below!
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);

// //7

// // POST /codecademy/learn-http HTTP/1.1
// // Host: www.codecademy.com
// // Content-Type: text/html; charset=UTF-8

// // Name=Eric&Age=26

// //8

// // What are the four commonly used HTTP methods ("verbs")?

// // A: FIND, SEND, UPDATE, REMOVE
// // B: CREATE, READ, UPDATE, DELETE
// // C: GET, SEND, PUT, DELETE
// // D: GET, POST, PUT, DELETE

// // var answer = "D";

// //9

// var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";

// //10

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/doesnt_exist", false);
// xhr.send();
// // Add your code below!
// console.log(xhr.status);

// //11

// // HTTP/1.1 200 OK
// // Content-Type: text/xml; charset=UTF-8

// // <?xml version="1.0" encoding="utf-8"?>
// // <string xmlns="https://www.codecademy.com/">Accepted</string>


// //12

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

// xhr.setRequestHeader('Content-Type', 'text/xml');
// xhr.send();

// xmlDocument = xhr.responseXML;
// console.log(xmlDocument.childNodes['0'].textContent);


// //13


// var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

// var json = JSON.parse(demo);
// console.log(json);


// //15

// // 1. HTTP is a protocol that connects clients and ______.
// var answer1 = "servers";

// // 2. The four HTTP methods are GET, POST, ___, and DELETE.
// var answer2 = "PUT";

// // 3. A ___ error means the server goofed up. (200, 300, 400, or 500)
// var answer3 = "500";



// //16

// // Add your code below this line!

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// xhr.send();

// // Add your code above this line!

// console.log(xhr.status);
// console.log(xhr.statusText);


// //17


// // What's an API key?

// // A: An alphanumeric string used to identify you to an API
// // B: An OAuth token
// // C: An All-Purpose Internet key
// // D: The tool used to unlock an API gate

// var answer = "A";


// //18

// // What data format is shown below? Set answer
// // equal to 'XML' for XML and 'JSON' for JSON.

// // {
// //   "Cartoon Foxes": {
// //     {
// //       "Name": "Fox Tall",
// //       "Job": "Bein' tall"
// //     },
// //     {
// //       "Name": "Fox Small",
// //       "Job": "Bein' small"
// //     }
// //   }
// // }

// var answer = "JSON";







// SEARCHING FOR YOUTUBE VIDEOS


// //2




// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');
    
    // Add code here to test out showResponse():
    showResponse("Hooray!");
}





//3


// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'id'
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}



//4


// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet'
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}


//5

// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: "house music"
        
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
}


