'use strict';
var SkyRemote = require('sky-remote');


exports.send_a_command = function(req, res) {
        var remoteControl = new SkyRemote(req.params.Server);
        remoteControl.press(req.params.Command,function() {
                res.end('OK');
        });
};
  

