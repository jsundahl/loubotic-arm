'use strict';

var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var expressWs = require('express-ws')(app);

// Define the port to run on
app.set('port', 4000);

app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'public')));

app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    console.log(msg);
  });

  app.post('/', function(req, res) {
    console.log(req.body);
    console.log('request made');
  });

  postForKeys([
    'w',
    'a',
    's',
    'd',
    'q',
    'e',
    'h'
  ])
});

function postForKeys(keys) {
  keys.forEach((key) => {
    app.post(`/${key}`, (req, res) => {
      console.log(key);
      ws.send(key);
      res.sendStatus(200)
    });
  })
}


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('running on port:  ' + port);
});


