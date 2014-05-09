/**
 * Created by kevin on 4/12/2014.
 */


App.populator('home', function ($page, data) {
  var $tabTemplate = $page.querySelector('.item.tab'),
    $tabParent = $tabTemplate.parentNode,
    $addTab = $page.querySelector('.new-tab'),
    $totalOwing = $page.querySelector('.total-you-owe .amount-owed'),
    $totalOwedToU = $page.querySelector('.total-you-are-owed .amount-owed'),
    $totalSummary = $page.querySelector('.total-balance .amount-owed'),
    client = data,
    loaded = false,
    totalOwing = 0,
    totalOwedToU = 0,
    totalSummary = 0;

  var openTabs = [];

  $page.addEventListener('appShow', function () {
    if (loaded) {
      reloadElements();
    } else {
      loaded = true;
    }
  });

  onLoad();

  function onLoad() {
    $tabParent.removeChild($tabTemplate);
    configureTopBarButtonRight();
    getData();
  }

  function reloadElements() {
    removeChildren($tabParent);
    getData();
  }

  function getData() {
    API.getSummaryData(client.username, function (users) {
      totalOwedToU = totalOwing = totalSummary = 0;
      if (users) {
        users.forEach(function (user) {
          renderTab(user);
        })
      }
      reloadSummaryBar();
    });
  }

  function reloadSummaryBar() {
    $totalOwing.innerHTML = '$' + Number(totalOwing).toFixed(2);
    $totalOwedToU.innerHTML = '$' + Number(totalOwedToU).toFixed(2);
    $totalSummary.classList.remove('positive');
    $totalSummary.classList.remove('negative');
    if (totalSummary <= 0) {
      $totalSummary.classList.add('negative');
      $totalSummary.innerHTML = '$' + Number(-1 * totalSummary).toFixed(2);
    } else {
      $totalSummary.classList.add('positive');
      $totalSummary.innerHTML = '$' + Number(totalSummary).toFixed(2);
    }
  }

  function configureTopBarButtonRight() {
    $addTab.addEventListener('click', function () {
      App.load('addContact', {
        client: client,
        filteredUsers: openTabs
      }, {
        transition: 'scale-in',
        duration: 300, // in milliseconds
        easing: 'ease-in-out'
      })
    });
  }


  function renderTab(user) {
    var $tab = $tabTemplate.cloneNode(true);
    var $userPic = $tab.querySelector('.user-thumbnail');
    renderThumbnail($userPic, user.thumbnail);
    $tab.querySelector('#fullname-home').innerHTML = user.fullName;
    $tab.querySelector('#username-home').innerHTML = user.username;
    var $owed = $tab.querySelector('#owed-home'),
      $text = $tab.querySelector('#text-home');
    renderOwing($owed, $text, user.balance);
    if (user.balance <= 0) {
      totalOwing += Number(-1 * user.balance);
    } else {
      totalOwedToU += Number(user.balance);
    }
    totalSummary += Number(user.balance);
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
        otheruser: {
          username: user.username,
          balance: user.balance,
          fullName: user.fullName,
          thumbnail: user.thumbnail
        }
      };
      App.load('detailedView', data);
    });
  }
});