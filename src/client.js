'use strict';

//setup serial
const SerialPort = require('serialport');
const port = new SerialPort('/dev/cu.usbmodem1421', {
  baudRate: 9600
});

//setup webSocket
const WebSocket = require('ws');
const ws = new WebSocket('http://localhost:4000');


ws.on('open', function open() {
  ws.send('connection test');
});

ws.on('message', function incoming(data) {
  console.log(data);
  port.write(data, function (err) {
    console.log(err);
  });
});