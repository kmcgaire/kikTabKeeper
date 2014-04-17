/**
 * Created by kevin on 4/12/2014.
 */


App.populator('home', function ($page, data) {
  var $tabTemplate = $page.querySelector('#tab'),
    $tabParent = $tabTemplate.parentNode,
    $addTab = $page.querySelector('.new-tab'),
    username = data.username;

  $tabTemplate.parentNode.removeChild($tabTemplate);

  API.getSummaryData(username, function (users) {
    if (users) {
      users.forEach(function (user) {
        renderTab(user);
      })
    }
  });

  $addTab.addEventListener('click', function () {
    App.load('addContact', {}, {
      transition: 'scale-in',
      duration: 300, // in milliseconds
      easing: 'ease-in-out'
    })
  });


  function renderTab(user) {
    var $tab = $tabTemplate.cloneNode(true);
    var userPic = $tab.querySelector('.user-thumbnail');
    if (user.thumbnail) {
      userPic.src = user.thumbnail;
    } else {
      userPic.src = "img/noprofile.png";
    }
    $tab.querySelector('#fullname-home').innerHTML = user.fullName;
    $tab.querySelector('#username-home').innerHTML = user.username;
    var owed = $tab.querySelector('#owed-home');
    var text = $tab.querySelector('#text-home');
    if (user.balance > 0) {
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

  function setTabClickable($tabElement, username) {
    new Clickable($tabElement);
    $tabElement.addEventListener('click', function () {
      var data = {username: username};
      App.load('detailedView', data);
    });
  }
});