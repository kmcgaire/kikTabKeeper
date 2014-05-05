/**
 * Created by kevin on 4/13/2014.
 */

App.populator('addContact', function ($page, data) {
  var $tab = $page.querySelector('.tab'),
    $selectFriend = $page.querySelector('.select-friend'),
    $createTab = $page.querySelector('.create-initial-tab'),
    hasSelectedFriend = false,
    $isSelected = $page.querySelector('.isSelected'),
    owner = data.username;

  new Clickable($selectFriend);
  new Clickable($createTab);

  $createTab.addEventListener('click', function () {
    validTab($page, function () {
      API.createNewContact(owner,$tab.id, function (res) {
        if(res){
          console.log('adding');
          console.log(owner);
          console.log($tab.id);
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
    var userPic = $tab.querySelector('.user-thumbnail');
    if (user.thumbnail) {
      userPic.src = user.thumbnail;
    } else {
      userPic.src = "img/noprofile.png";
    }
    $tab.querySelector('#fullname-add').innerHTML = user.fullName;
    $tab.querySelector('#username-add').innerHTML = user.username;
    $tab.id = user.username;
  }


});
