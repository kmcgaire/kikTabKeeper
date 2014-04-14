

exports.getSummaryData = function (username, callback) {
  var sampleData = [
    {
      username: 'kmcgaire',
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
      current: 'dollars',
      description:'Pancakes',
      date: new Date().getTime()
    }
  ];

  callback(sampleData);
}