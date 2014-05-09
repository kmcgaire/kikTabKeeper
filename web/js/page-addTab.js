/**
 * Created by kevin on 5/5/2014.
 */

App.populator('addTab', function ($page, data) {
  var $createTab = $page.querySelector('.create-tab'),
    client = data.client,
    otheruser = data.otheruser;

  $createTab.addEventListener('click', function () {
    validTab($page, function (amount, description) {
      API.createTab(client, otheruser, amount, description, function (res) {
        App.back();
      })
    })
  })


});