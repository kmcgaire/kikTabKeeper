/**
 * Created by kevin on 4/13/2014.
 */

App.populator('detailedView', function ($page, data) {
  var $payment = $page.querySelector('.payment'),
    $remind = $page.querySelector('.remind'),
    $tabTemplate = $page.querySelector('#individual-tab'),
    $tabParent = $tabTemplate.parentNode,
    client = data.client,
    tabUsername = data.username;

  setButtonsClickable();
  renderTabList();

   $tabParent.removeChild($tabTemplate);

  function setButtonsClickable() {
    new Clickable($payment);
    $payment.addEventListener('click', function () {
      console.log('yolo');
    });
    new Clickable($remind);
    $remind.addEventListener('click', function () {
      console.log('swag');
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
    var $description = $tabItem.querySelector('#description'),
      $date = $tabItem.querySelector('#date-created'),
      $owing = $tabItem.querySelector('#owing'),
      $amount = $tabItem.querySelector('#owing-amount');

    $description.innerHTML = tab.description;
    $date.innerHTML = tab.date;
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
