
// if the key typed equals the span element change the text color to green and go to next span
// if the key typed doesn't equal the span element change text color to red and keep it on the span element

var $key = document.querySelectorAll('span');
// node list of span elements
var $body = document.querySelector('body');
// body elment
var i = 0;
// starting index

$body.addEventListener('keydown', function (event) {
  if (event.key === $key[i].textContent) {
    // if the value of key is equal to the text content
    $key[i].className = 'done';
    // update the classname to done
    $key[i + 1].className = 'active';
    // move the active classname to the next index
    i++;
    // increment the index
  } else if (event.key !== $key[i].textContent) {
    // if the event key does not equal text content
    $key[i].className = 'wrong';
    // update the classname to wrong until the key is entered correctly
  }
});
