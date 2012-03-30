/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var pageMod = require('page-mod');
var data = require('self').data;

exports.main = function(options, callbacks) {
  var pageMod = require("page-mod");
  pageMod.PageMod({
    include: "*.khanacademy.org",
    contentScriptWhen: 'end',
    contentScriptFile: [ 
      data.url('jquery-1.4.4.min.js'),
      data.url('content-script.js')
    ]
  });
};
