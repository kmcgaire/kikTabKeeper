
exports.createNewContact = function (owner, contact, callback) {
  callback(true);
};

exports.getSummaryData = function (username, callback) {
  var sampleData = [
    {
      username: 'kik_debug2',
      fullName: 'Kevin McGaire',
      thumbnail: null,
      balance: -3.5
    } , {
      username: 'robinsharma',
      fullName: 'Robin Sharma',
      thumbnail: null,
      balance: 2.5
    } , {
      username: 'kmcgaire',
      fullName: 'Kevin McGaire',
      thumbnail: null,
      balance: 3
    }, {
      username: 'robinsharma',
      fullName: 'Robin Sharma',
      thumbnail: null,
      balance: 2.5
    } , {
      username: 'kmcgaire',
      fullName: 'Kevin McGaire',
      thumbnail: null,
      balance: 3
    }, {
      username: 'robinsharma',
      fullName: 'Robin Sharma',
      thumbnail: null,
      balance: 2.5
    } , {
      username: 'kmcgaire',
      fullName: 'Kevin McGaire',
      thumbnail: null,
      balance: 3
    }
    , {
      username: 'robinsharma',
      fullName: 'Robin Sharma',
      thumbnail: null,
      balance: 2.5
    } , {
      username: 'kmcgaire',
      fullName: 'Kevin McGaire',
      thumbnail: null,
      balance: 3
    }
    , {
      username: 'robinsharma',
      fullName: 'Robin Sharma',
      thumbnail: null,
      balance: 2.5
    } , {
      username: 'kmcgaire',
      fullName: 'Kevin McGaire',
      thumbnail: null,
      balance: 3
    }
  ];
  callback(sampleData);
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