setInterval(countdown, 1000);
var count = 4;
clearInterval(countdown);
var h1 = document.querySelector('h1');
function countdown(numbers, stirng) {
  if (count > 0) {
    h1.textContent = count--;
  } else {
    h1.textContent = '~Earth Beeeelooowww Us~';
  }
}
