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

function renderThumbnail($element, img){
  if (img) {
    $element.src = img;
  } else {
    $element.src = "img/noprofile.png";
  }
}

function renderOwing($owed, $text, balance) {
  if (balance > 0) {
    $text.innerHTML = 'owed to u';
    $text.classList.add('positive');
    $owed.classList.add('positive');
  } else {
    $text.innerHTML = 'owing';
    $text.classList.add('negative');
    $owed.classList.add('negative');
  }
  $owed.innerHTML = '$' + Number(balance).toFixed(2);
}

function removeChildren($element) {
  while ($element.firstChild) {
    $element.removeChild($element.firstChild);
  }
}