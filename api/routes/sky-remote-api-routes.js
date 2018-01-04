'use strict';
module.exports = function(app) {
  var skyRemoteApi = require('../controller/sky-remote-api-controller');

  // sky api route
  app.route('/:Server/:Type/:Command')
    .get(skyRemoteApi.send_a_command)
};
