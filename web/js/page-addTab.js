/**
 * Created by kevin on 5/5/2014.
 */

App.populator('addTab', function ($page, data) {
  var $createTab = $page.querySelector('.create-tab'),
    client= data.client,
    username = data.contact.username;

  $createTab.addEventListener('click', function () {
    validTab($page, function (amount, description) {
      API.createTab(client, username, amount, description, function (res) {
        console.log(res);//Placeholder
      })
    })
  })


});