var express       = require('express');
var path          = require('path');
var port          = process.env.PORT || 3000;
var flash         = require('connect-flash');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose');
var app           = express();
var configDB    = require('./config/database.js');
var routes = require('./routes/index');
var users = require('./routes/users');
var childProcess = require('child_process');
var updateTimeInterval = 1000*60*60*24 // one day

function ds(){
  console.log("downloading schedule");
  childProcess.exec('node ./node_modules/gtfs/scripts/download.js',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    setTimeout(function(){
      ds()
    },updateTimeInterval);
  });
}; 

ds();
