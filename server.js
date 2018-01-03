var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Command  = require('./api/models/sky-remote-api-models'),
  SkyRemote = require('sky-remote'),
  bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/sky-remote-api-routes');
routes(app); 


app.listen(port);

console.log('sky-remote-api server started on: ' + port);










