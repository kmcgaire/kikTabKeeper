/**
 * Created by kevin on 5/6/2014.
 */

var MongoJS = require('mongojs');

var db;
var mongoHqUrl = process.env.MONGOHQ_URL;
if (mongoHqUrl) {
  db = MongoJS(mongoHqUrl);
  console.log("Connected to DB: " + mongoHqUrl);
} else {
  db = MongoJS('kiktabkeeper');
}

module.exports = db;

