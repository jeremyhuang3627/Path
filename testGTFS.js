var gtfs = require("gtfs");

gtfs.agencies(function(err, agencies) {
	if (err) {
		console.log(err);
	}
	console.log("agencies");	
	console.log(agencies);
});