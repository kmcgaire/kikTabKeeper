/**
 * Created by kevin on 5/4/2014.
 */

function validTab($page, callback) {
  var desc = $page.querySelector('#description').value,
    amount = $page.querySelector('#amount').value;
  var isValidAmount = !isNaN(amount) && (amount.length != 0);
  var isValidDescription = desc.length !== 0;
  var isValidTab = isValidAmount && isValidDescription;
  if (isValidTab){
   callback(amount, desc);
  } else if (!isValidDescription){
    App.dialog({
      title: 'Please Enter a Description',
      okButton: 'Ok'
    });
  } else if (!isValidAmount) {
    App.dialog({
      title: 'Please Enter a Valid Amount',
      okButton: 'Ok'
    });
  }
}