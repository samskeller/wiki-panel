// Written by Sam Keller, April 1, 2012
//
// content-script.js
//
// A content script file for retrieving the url of the video on a given
// khan academy website and then we can port this url to our main.js file

var url = ($("object param").attr("value"));
//console.log(url);
self.port.emit("myURL", url);


// For replacing:
//$("object").replaceWith( "Sam Keller" );