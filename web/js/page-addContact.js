/**
 * Created by kevin on 4/13/2014.
 */

App.populator('addContact', function ($page, data) {
  var $tab = $page.querySelector('.tab'),
    $selectFriend = $page.querySelector('.select-friend'),
    $createTab = $page.querySelector('.create-initial-tab'),
    hasSelectedFriend = false,
    $isSelected = $page.querySelector('.isSelected'),
    client = data.client;

  new Clickable($selectFriend);
  new Clickable($createTab);

  $createTab.addEventListener('click', function () {
    validTab($page, function (amount, description) {
      var creator = {
        username: client.username,
        fullName: client.fullName,
        thumbnail: client.thumbnail
      };
      var otheruser = {
        username: $page.querySelector('#username-add').innerHTML,
        fullName: $page.querySelector('#fullname-add').innerHTML,
        thumbnail: $page.querySelector('.user-thumbnail').src
      };
      console.log("Sending Creator of");
      console.log(JSON.stringify(creator));
      console.log("Sending otheruser as");
      console.log(JSON.stringify(otheruser));
      API.createNewContactandTab(otheruser, creator, amount, description, function (res) {
        if(res){
          console.log('Successfully Added user1:' + JSON.stringify(otheruser));
          console.log('Successfully Added user2:' + JSON.stringify(creator));
          console.log('Successfully Created Amount:' + amount);
          App.back();
        }
      })
    });
  });

  $selectFriend.addEventListener('click', function () {
    kik.pickUsers({
      minResults : 1 ,
      maxResults : 1 ,
      filtered: data.filteredUsers
    }, function (users) {
      if ( !users ) {
        // action was cancelled by user
      } else {
        users.forEach(function (user) {
          hasSelectedFriend = true;
          $isSelected.style.display = 'block';
          renderUser(user);
        });
      }
    });
  });

  function renderUser(user) {
    var $userPic = $tab.querySelector('.user-thumbnail');
    renderThumbnail($userPic, user.thumbnail);
    $tab.querySelector('#fullname-add').innerHTML = user.fullName;
    $tab.querySelector('#username-add').innerHTML = user.username;
    $tab.id = user.username;
  }


});
