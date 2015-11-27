if (process.env.NODE_ENV === 'test'){
  module.exports = require('./test/config');
  return;
}

module.exports = {
  mongo_url: process.env.MONGO_URL || "mongodb://jeremy:123@ds059644.mongolab.com:59644/heroku_k584w5qg",
  agencies: [
    {
      agency_key: 'path',
      url: 'http://data.trilliumtransit.com/gtfs/path-nj-us/path-nj-us.zip'
    }
  ]
};