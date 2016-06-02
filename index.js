'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(http);
var socket = io.listen(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('appPath', path.join(__dirname, 'client'));
// app.use(express.static(path.join(path.normalize(__dirname + '/'), 'client')));
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});

var PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
   console.log('Express server listening on %d, in %s mode', 3000);
});

exports = module.exports = app;
