'use strict';
module.exports = function(app) {
  var skyRemoteApi = require('../controller/sky-remote-api-controller');

  // sky-remote-api Routes
  app.route('/:Server/:Command')
    .get(skyRemoteApi.send_a_command)
};
