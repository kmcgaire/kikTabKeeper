/**
 * Created by kevin on 4/12/2014.
 */


App.populator('home', function($page, data){
  var $tabTemplate = $page.querySelector('.tab'),
    username = data.username,
    $tabParent = $tabTemplate.parentNode;

  $tabTemplate.parentNode.removeChild($tabTemplate);

  API.getSummaryData(username, function (users) {
    console.log('test');
    if(users){
      users.forEach(function (user) {
        console.log(JSON.stringify(user));
        renderTab(user);
      })
    }
  });



  function renderTab(user){
    var $tab = $tabTemplate.cloneNode(true);
    var userPic = $tab.querySelector('.user-thumbnail');
    if(user.thumbnail){
      userPic.src = user.thumbnail;
    } else {
      userPic.src = "img/noprofile.png";
    }
    $tab.querySelector('#fullname').innerHTML = user.fullName;
    $tab.querySelector('#username').innerHTML = user.username;
    var owed = $tab.querySelector('#owed');
    var text = $tab.querySelector('#text');
    if (user.balance > 0){
      text.innerHTML = 'owed to u';
      text.classList.add('positive');
      owed.classList.add('positive');
    } else {
      text.innerHTML = 'owing';
      text.classList.add('negative');
      owed.classList.add('negative');
    }
    owed.innerHTML = '$' + Number(user.balance).toFixed(2);

    setTabClickable($tab, user.username);
    $tabParent.appendChild($tab);
  }

  function setTabClickable($tabElement, username){
    new Clickable($tabElement);
    $tabElement.addEventListener('click', function () {
      var data = {username: username}
      App.load('detailedView', data);
    });
  }
});