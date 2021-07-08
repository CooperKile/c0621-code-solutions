var overlay = document.querySelector('.overlay');
var button = document.querySelector('.button-open');
var close = document.querySelector('.button-close');

button.addEventListener('click', function (event) {
  overlay.className = 'overlay';
});

close.addEventListener('click', function (event) {
  overlay.className = 'hidden';
});
