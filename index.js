'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(http);
var socket = io.listen(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('appPath', path.join(__dirname, 'client'));
app.use(express.static(path.join(path.normalize(__dirname + '/'), 'client')));

server.listen(3000, function() {
   console.log('Express server listening on %d, in %s mode', 3000);
});

