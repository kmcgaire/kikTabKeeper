

var BackendSummary = require('./summary.js');
var BackendTabs= require('./tabs.js');

exports.createNewContactandTab = function (owner, contact, amount, description, callback) {
  console.log("Creating new Contact in Summary");
  if(owner && contact){
    var user2 = {
      username: owner.username,
      fullName: owner.fullName,
      thumbnail: owner.thumbnail
    };
    var user1 = {
      username: contact.username,
      fullName: contact.fullName,
      thumbnail: contact.thumbnail
    };
    var newAmount = Number(amount);
    BackendTabs.insertTab(user1, user2, newAmount, 'dollars', description, new Date().getTime(), callback);
    BackendSummary.createInitalTabSumamry(user1,user2,newAmount,callback);
  } else {
  callback(null)
  }
};

exports.createTab = function (owner, contact, amount, description, callback) {
  if(owner && contact) {
    var user2 = {
      username: owner.username,
      fullName: owner.fullName,
      thumbnail: owner.thumbnail
    };
    var user1 = {
      username: contact.username,
      fullName: contact.fullName,
      thumbnail: contact.thumbnail
    };
    var newAmount = Number(amount);
    //Update Backend Summary
    console.log('User1 is :');
    console.log(JSON.stringify(user1));
    console.log('user2 is :');
    console.log(JSON.stringify(user2));
    BackendSummary.updateTabSummary(user1.username, user2.username, newAmount);
    BackendTabs.insertTab(user1, user2, newAmount, 'dollars', description, new Date().getTime(),callback);
  } else {
    callback(null);
  }
};

exports.getSummaryData = function (username, callback) {
  var dataToReturn =[];
  BackendSummary.getUsersSummary(username, function (tabList) {
    var dataToInsert;
    if(tabList){
      tabList.forEach(function (summaryTab) {
        if (summaryTab.user1.username === username){
          dataToInsert = {};
          dataToInsert.username = summaryTab.user2.username;
          dataToInsert.fullName = summaryTab.user2.fullName;
          dataToInsert.thumbnail = summaryTab.user2.thumbnail;
          dataToInsert.balance = -1 * Number(summaryTab.amount);
        } else if (summaryTab.user2.username === username){
          dataToInsert = {};
          dataToInsert.username = summaryTab.user1.username;
          dataToInsert.fullName = summaryTab.user1.fullName;
          dataToInsert.thumbnail = summaryTab.user1.thumbnail;
          dataToInsert.balance = Number(summaryTab.amount);
        } else {
          console.log('--------------------------------------------------------------------------------');
          console.log('Returned an item from DB that should not have match query parameters');
          console.log('--------------------------------------------------------------------------------');
        }
        if(dataToInsert){
          dataToReturn.push(dataToInsert);
        }
      });
      callback(dataToReturn);
    }
  });
//  var sampleData = [
//    {
//      username: 'kik_debug2',
//      fullName: 'Kevin McGaire',
//      thumbnail: null,
//      balance: -3.5
//    } , {
//      username: 'robinsharma',
//      fullName: 'Robin Sharma',
//      thumbnail: null,
//      balance: 2.5
//    } , {
//      username: 'kmcgaire',
//      fullName: 'Kevin McGaire',
//      thumbnail: null,
//      balance: 3
//    }, {
//      username: 'robinsharma',
//      fullName: 'Robin Sharma',
//      thumbnail: null,
//      balance: 2.5
//    } , {
//      username: 'kmcgaire',
//      fullName: 'Kevin McGaire',
//      thumbnail: null,
//      balance: 3
//    }, {
//      username: 'robinsharma',
//      fullName: 'Robin Sharma',
//      thumbnail: null,
//      balance: 2.5
//    } , {
//      username: 'kmcgaire',
//      fullName: 'Kevin McGaire',
//      thumbnail: null,
//      balance: 3
//    }
//    , {
//      username: 'robinsharma',
//      fullName: 'Robin Sharma',
//      thumbnail: null,
//      balance: 2.5
//    } , {
//      username: 'kmcgaire',
//      fullName: 'Kevin McGaire',
//      thumbnail: null,
//      balance: 3
//    }
//    , {
//      username: 'robinsharma',
//      fullName: 'Robin Sharma',
//      thumbnail: null,
//      balance: 2.5
//    } , {
//      username: 'kmcgaire',
//      fullName: 'Kevin McGaire',
//      thumbnail: null,
//      balance: 3
//    }
//  ];
//  callback(sampleData);
};

exports.getTabList = function(owner, username, callback){
  BackendTabs.getTabs(owner, username, function (tabList) {
    var tabsToReturn = [];
    if(tabList){
      tabList.forEach(function (tab) {
        var lender = {};
        var borrower = {};
        console.log("The amount is :" + tab.amount);
        if(tab.amount <= 0) {
          lender.username = tab.user1.username;
          lender.fullName = tab.user1.fullName;
          borrower.username = tab.user2.username;
          borrower.fullName = tab.user2.fullName;
        } else {
          lender.username = tab.user2.username;
          lender.fullName = tab.user2.fullName;
          borrower.username = tab.user1.username;
          borrower.fullName = tab.user1.fullName;
        }
        console.log("The Lender is: " + JSON.stringify(lender));
        console.log("The borrower is: " + JSON.stringify(borrower));
        tabsToReturn.push({
          lender: lender,
          borrower: borrower,
          amount: Math.abs(tab.amount),
          currency: tab.currency,
          description: tab.description,
          date: new Date(tab.date).toDateString()
        });
      });
      callback(tabsToReturn);
    }
  });
//  var sampleData = [
//    {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'robinsharma',
//        fullName: 'Robin Sharma'
//      } ,
//      amount: 1.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: new Date().toDateString()
//    } , {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }, {
//      lender: {
//        username: 'kmcgaire',
//        fullName: 'Kevin McGaire'
//      } ,
//      borrower: {
//        username: 'theMizzler',
//        fullName: 'mitchel'
//      } ,
//      amount: 3.20,
//      currency: 'dollars',
//      description:'Pancakes',
//      date: "Sat Apr 19 2014"
//    }
//  ];
//
//  callback(sampleData);
};