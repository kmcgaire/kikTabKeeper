/**
 * Created by kevin on 4/13/2014.
 */

App.populator('detailedView', function ($page, data) {
  var $payment = $page.querySelector('.payment'),
    $remind = $page.querySelector('.remind');

  setButtonsClickable();


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
});
