/**
 * Created by kevinmcgaire on 3/13/2014.
 */

App.populator('splash', function ($page) {
  var warning = $page.querySelector('.warning');
  $page.querySelector('.login').addEventListener('click', function () {
    kik.getUser(function (user) {
      if (!user) {
        warning.style.display = 'block';
      } else {
        App.load('home', user);
      }
    });
  });
});
