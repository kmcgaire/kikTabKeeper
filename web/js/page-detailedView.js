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
    tabUsername = data.username;

  console.log(JSON.stringify(data));

  setButtonsClickable();
  renderTabList();

   $tabParent.removeChild($tabTemplate);
  renderContact();

  function renderContact(){
    var $owed = $page.querySelector('#owed-detail'),
      $text = $page.querySelector('#text-detail'),
      $userPic = $page.querySelector('.user-picture');
    renderThumbnail($userPic, data.thumbnail);
    renderOwing($owed, $text, data.balance);
    $page.querySelector('#fullname-detail').innerHTML = data.fullName;
    $page.querySelector('#username-detail').innerHTML = data.username;
  }

  function setButtonsClickable() {
    new Clickable($payment);
    $payment.addEventListener('click', function () {
      console.log('yolo');
    });
    new Clickable($remind);
    $remind.addEventListener('click', function () {
      kik.send({
        title     : 'PlaceHolder'         ,
        text      : 'Moar PlaceHolders'          ,
        pic       : 'http://mysite.com/pic' , // optional
        big       : true                    , // optional
        noForward : true                    , // optional
        data      : { some : 'json' }         // optional
      });
    });

    $addTab.addEventListener('click', function () {
      App.load('addTab', {
        client: client
      }, {
        transition: 'scale-in',
        duration: 300, // in milliseconds
        easing: 'ease-in-out'
      })
    });
  }

  function renderTabList() {
    API.getTabList(client, tabUsername, function (tabList) {
      if(tabList){
        tabList.forEach(function (tab) {
          renderTab(tab);
        })
      }
    })
  }

  function renderTab(tab) {
    var $tabItem = $tabTemplate.cloneNode(true);
    var $owing = $tabItem.querySelector('#owing'),
      $amount = $tabItem.querySelector('#owing-amount');

    $tabItem.querySelector('#description').innerHTML = tab.description;
    $tabItem.querySelector('#date-created').innerHTML = tab.date;
    if (tab.lender.username === data.client) {
      $owing.innerHTML = 'owed to u';
      $owing.classList.add('positive');
      $amount.classList.add('positive');
    } else {
      $owing.innerHTML = 'owing';
      $owing.classList.add('negative');
      $amount.classList.add('negative');
    }
    $amount.innerHTML = '$' + Number(tab.amount).toFixed(2);

    $tabParent.appendChild($tabItem);
  }
});
