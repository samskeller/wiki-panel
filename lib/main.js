/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var pageMod = require('page-mod');
var data = require('self').data;
var request = require('request').Request;

var wiki_panel = require("panel").Panel({
  width: 240,
  height: 320,
  contentURL: "http://en.m.wikipedia.org/",
  contentScriptFile: [data.url("jquery-1.4.4.min.js"),
                      data.url("panel.js")]
});

// if you open a new tab:
wiki_panel.port.on("click", function(url) {
  require("tabs").open(url);
  
  // initialize a XMLHttpRequest object with the url set to
  // the url clicked in the panel. Print this url out in the 
  // terminal window
  
    var pageMod = require("page-mod");
    pageMod.PageMod({
      include: "*.wikipedia.org",
      contentScriptWhen: 'end',
      contentScriptFile: [ 
        data.url('jquery-1.4.4.min.js'),
        data.url('content-script.js')
      ],
    
      onAttach: function(worker) {
        worker.port.on('myURL', function(wikiurl) {
          console.log('This is the url: ' + wikiurl);
        
          var newRequest = new request({
            url: 'http://localhost:8080/track/page',
            content: 'page=' + encodeURIComponent(wikiurl),
            onComplete: function (response) {
              console.log('The response is the following : ' + response);
            }
          }).post();
        });
      }
    });
});


require("widget").Widget({
  id: "open-wikipedia-btn",
  label: "Wikpedia",
  contentURL: "http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wikipedia%27s_W.svg/1000px-Wikipedia%27s_W.svg.png",
  panel: wiki_panel
});