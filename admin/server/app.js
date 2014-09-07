/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
var autoinc = require('mongoose-auto-increment')
var winston = require('winston');

winston.add(winston.transports.File, {filename: __dirname + '/logs/winston.log'});
winston.remove(winston.transports.Console)

// Connect to database
var mongo_conn = mongoose.connect(config.mongo.uri, config.mongo.options);
autoinc.initialize(mongo_conn);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;