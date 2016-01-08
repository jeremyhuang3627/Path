var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Trip = require('../models/Trip.js');
var Route = require('../models/Route.js');
var Stop = require('../models/Stop.js');
var StopTime = require('../models/StopTime.js');
var RouteDirection = require('../models/RouteDirection.js');
var url = require('url');

/* GET home page. */
router.get('/*', function(req, res, next) {
	var model = undefined;
	if (req.url == '/trips') {
		model = Trip;
	} else if (req.url == '/routes') {
		model = Route;
	} else if (req.url == '/stops') {
		model = Stop;
	} else if (req.url == '/stoptimes') {
		model = StopTime;
	} else if (req.url == '/routedirection') {
		model = RouteDirection;
	};

	if (model == undefined) {
		res.send(404);
		return;
	}	

  	model.find({},function(err,data) {
  		if (err) {
  			throw err
  		}
  		//console.log(data);
  		res.send(JSON.stringify(data));
  	});
});

module.exports = router;
