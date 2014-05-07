/**
 * Created by kevin on 4/12/2014.
 */


App.populator('home', function ($page, data) {
  var $tabTemplate = $page.querySelector('.item.tab'),
    $tabParent = $tabTemplate.parentNode,
    $addTab = $page.querySelector('.new-tab'),
    client = data.username;

  var openTabs = [];

  $tabParent.removeChild($tabTemplate);

  API.getSummaryData(client, function (users) {
    if (users) {
      users.forEach(function (user) {
        renderTab(user);
      })
    }
  });

  $addTab.addEventListener('click', function () {
    App.load('addContact', {
      username: data.username,
      filteredUsers: openTabs
    }, {
      transition: 'scale-in',
      duration: 300, // in milliseconds
      easing: 'ease-in-out'
    })
  });


  function renderTab(user) {
    var $tab = $tabTemplate.cloneNode(true);
    var $userPic = $tab.querySelector('.user-thumbnail');
    renderThumbnail($userPic, user.thumbnail);
    $tab.querySelector('#fullname-home').innerHTML = user.fullName;
    $tab.querySelector('#username-home').innerHTML = user.username;
    var $owed = $tab.querySelector('#owed-home'),
      $text = $tab.querySelector('#text-home');
    renderOwing($owed, $text, user.balance);
    $tab.id = user.username;

    setTabClickable($tab, user);
    openTabs.push(user.username);
    $tabParent.appendChild($tab);
  }

  function setTabClickable($tabElement, user) {
    new Clickable($tabElement);
    $tabElement.addEventListener('click', function () {
      var data = {
        client: client,
        username: user.username,
        balance: user.balance,
        fullName: user.fullName,
        thumbnail: user.thumbnail
      };
      App.load('detailedView', data);
    });
  }
});