/**
 * Created by kevin on 4/13/2014.
 */

App.populator('addContact', function ($page, data) {
  var $tab = $page.querySelector('.tab'),
    $selectFriend = $page.querySelector('.select-friend'),
    hasSelectedFriend = false;

  renderAmount(10.2);

  new Clickable($selectFriend);
  $selectFriend.addEventListener('click', function () {
    kik.pickUsers({
      minResults : 1 ,
      maxResults : 1 ,
      filterSelf: true
    }, function (users) {
      if ( !users ) {
        // action was cancelled by user
      } else {
        users.forEach(function (user) {
          hasSelectedFriend = true;
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

  function renderAmount(amount){
    var owed = $tab.querySelector('#owed-add');
    var text = $tab.querySelector('#text-add');
    if (amount > 0) {
      text.innerHTML = 'owed to u';
      text.classList.add('positive');
      owed.classList.add('positive');
    } else {
      text.innerHTML = 'owing';
      text.classList.add('negative');
      owed.classList.add('negative');
    }
    owed.innerHTML = '$' + amount.toFixed(2);
  }
});
