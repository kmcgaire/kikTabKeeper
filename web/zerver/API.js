

var BackendSummary = require('./summary.js');

exports.createNewContactandTab = function (owner, contact, amount, description, callback) {
  if(owner && contact){
    BackendSummary.createInitalTabSumamry(owner,contact,amount,callback);
  } else {
  callback(null)
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
          dataToInsert.balance = -1 * summaryTab.amount;
        } else if (summaryTab.user2.username === username){
          dataToInsert = {};
          dataToInsert.username = summaryTab.user1.username;
          dataToInsert.fullName = summaryTab.user1.fullName;
          dataToInsert.thumbnail = summaryTab.user1.thumbnail;
          dataToInsert.balance = summaryTab.amount;
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
  var sampleData = [
    {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'robinsharma',
        fullName: 'Robin Sharma'
      } ,
      amount: 1.20,
      currency: 'dollars',
      description:'Pancakes',
      date: new Date().toDateString()
    } , {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }, {
      lender: {
        username: 'kmcgaire',
        fullName: 'Kevin McGaire'
      } ,
      borrower: {
        username: 'theMizzler',
        fullName: 'mitchel'
      } ,
      amount: 3.20,
      currency: 'dollars',
      description:'Pancakes',
      date: "Sat Apr 19 2014"
    }
  ];

  callback(sampleData);
};