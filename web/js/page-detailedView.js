/**
 * Created by kevin on 4/13/2014.
 */

App.populator('detailedView', function ($page, data) {
  var $payment = $page.querySelector('.payment'),
    $remind = $page.querySelector('.remind'),
    $tabTemplate = $page.querySelector('#individual-tab'),
    $tabParent = $tabTemplate.parentNode,
    $addTab = $page.querySelector('.new-tab'),
    client = data.client,
    otheruser = data.otheruser,
    loaded = false,
    $owed = $page.querySelector('#owed-detail'),
    $text = $page.querySelector('#text-detail'),
    totalOwing = 0;

  $page.addEventListener('appShow', function () {
    if(loaded){
      reloadElements();
    } else {
      loaded = true;
    }
  });

  onLoad();

  function onLoad() {
    setButtonsClickable();
    renderTabList();
    $tabParent.removeChild($tabTemplate);
    renderContact();
  }
  function reloadElements() {
    removeChildren($tabParent);
    renderTabList();
  }

  function renderContact(){
    var $userPic = $page.querySelector('.user-picture');
    renderThumbnail($userPic, otheruser.thumbnail);
    $page.querySelector('#fullname-detail').innerHTML = otheruser.fullName;
    $page.querySelector('#username-detail').innerHTML = otheruser.username;
  }

  function setButtonsClickable() {
    new Clickable($payment);
    $payment.addEventListener('click', function () {
      App.dialog({
        title: 'Will be implemented in the future',
        text: 'For now add another tab. Label it payment with a negative number if its the other person paying',
        okButton: 'Ok'
      });
    });
    new Clickable($remind);
    $remind.addEventListener('click', function () {
      kik.openConversation(otheruser.username);
    });

    $addTab.addEventListener('click', function () {
      App.load('addTab', {
        client: client,
        otheruser: otheruser
      }, {
        transition: 'scale-in',
        duration: 300, // in milliseconds
        easing: 'ease-in-out'
      })
    });
  }

  function renderTabList() {
    totalOwing = 0;
    API.getTabList(client.username, otheruser.username , function (tabList) {
      if(tabList){
        tabList.forEach(function (tab) {
          renderTab(tab);
        })
        renderOwing($owed, $text, totalOwing);
      }
    })
  }

  function renderTab(tab) {
    var $tabItem = $tabTemplate.cloneNode(true);
    var $owing = $tabItem.querySelector('#owing'),
      $amount = $tabItem.querySelector('#owing-amount');
    var desc;
    if(tab.description.length >= 20) {
      desc = tab.description.substring(0,20) + '...';
    } else {
      desc = tab.description;
    }
    $tabItem.querySelector('#description').innerHTML = desc;
    $tabItem.querySelector('#date-created').innerHTML = tab.date;
    if (tab.lender.username === client.username) {
      $owing.innerHTML = 'owed to u';
      $owing.classList.add('positive');
      $amount.classList.add('positive');
      totalOwing += tab.amount;
    } else {
      $owing.innerHTML = 'owing';
      $owing.classList.add('negative');
      $amount.classList.add('negative');
      totalOwing -= tab.amount;
    }
    $amount.innerHTML = '$' + Number(tab.amount).toFixed(2);

    $tabParent.appendChild($tabItem);
  }
});
