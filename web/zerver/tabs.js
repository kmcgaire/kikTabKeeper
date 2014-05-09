/**
 * Created by kevin on 5/8/2014.
 */

var Tabs = require('./db').collection('tabs');


// user1 owes user2 the amount
exports.insertTab = function (user1, user2, amount, currency, description, date, callback) {
  var tabToInsert = {
    user1: user1,
    user2: user2,
    amount: amount,
    currency: currency,
    description: description,
    date: date
  };
  Tabs.insert(tabToInsert);
  if (callback) {
    callback(tabToInsert);
  }
};

exports.getTabs = function (username1, username2, callback) {
  Tabs.find({
    $or: [
      {
        'user1.username': username1,
        'user2.username': username2
      },
      {
        'user1.username': username2,
        'user2.username': username1
      }
    ]
  }).sort({ date: -1 }, function (err, tabList) {
      callback(tabList)
    });
};