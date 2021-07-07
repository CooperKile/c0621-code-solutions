var clickAmount = null;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  clickAmount++;
  var buttonClass;
  if (clickAmount < 4) {
    buttonClass = 'cold';
  } else if (clickAmount < 7) {
    buttonClass = 'cool';
  } else if (clickAmount < 10) {
    buttonClass = 'tepid';
  } else if (clickAmount < 13) {
    buttonClass = 'warm';
  } else if (clickAmount < 16) {
    buttonClass = 'hot';
  } else {
    buttonClass = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + buttonClass;
  $clickCount.textContent = 'Clicks: ' + clickAmount;
});
