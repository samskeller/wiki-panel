/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var data = require("self").data;

var wiki_panel = require("panel").Panel({
  width: 240,
  height: 320,
  contentURL: "http://en.m.wikipedia.org/",
  contentScriptFile: [data.url("jquery-1.4.4.min.js"),
                      data.url("panel.js")]
});

wiki_panel.port.on("click", function(url) {
  require("tabs").open(url);
});

require("widget").Widget({
  id: "open-wikipedia-btn",
  label: "Wikpedia",
  contentURL: "http://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Wikipedia%27s_W.svg/1000px-Wikipedia%27s_W.svg.png",
  panel: wiki_panel
});

exports.main = function(options, callbacks) {
  // If you run cfx with --static-args='{"quitWhenDone":true}' this program
  // will automatically quit Firefox when it's done.
  if (options.staticArgs.quitWhenDone)
    callbacks.quit();
};
