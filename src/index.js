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
  app.post('/w', function(req, res) {
    console.log('w');
    ws.send('w')
  });
  app.post('/s', function(req, res) {
    console.log('s');
    ws.send('s');
  });
  app.post('/a', function(req, res) {
    console.log('a');
    ws.send('a');
  });
  app.post('/d', function(req, res) {
    console.log('d');
    ws.send('d');
  });
  app.post('/q', function(req, res) {
    console.log('q');
    ws.send('q');
  });
  app.post('/e', function(req, res) {
    console.log('e');
    ws.send('e');
  });
  app.post('/h', function(req, res) {
    console.log('h');
    ws.send('h');
  });
});


// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('running on port:  ' + port);
});


