// grab the lightbulb element using query selector and assign it to a variable
// add an event listener for when the lightbulb is clicked
// event handler function:
// check the isOn variable for current state of lightbulb
// - if light bulb is currently off:
//   - switch lightbulb and background to on
//   - change isOn value to true
// - if light is currently on
//   - switch lightbulb and background to off
//   - change isOn value to false

var $lightBulb = document.querySelector('.light-bulb');
var $background = document.querySelector('body');
var isOn = false;
$lightBulb.addEventListener('click', function (event) {
  var bulbClass;
  if (isOn) {
    bulbClass = 'off';
    isOn = false;
  } else {
    bulbClass = 'on';
    isOn = true;
  }
  $lightBulb.className = 'light-bulb ' + bulbClass;
  $background.className = bulbClass;
});
