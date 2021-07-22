
var container = document.querySelectorAll('.container');
var next = document.querySelectorAll('.next');
var previous = document.querySelectorAll('.previous');
var circle = document.querySelectorAll('.fa-circle');
var rowCircle = document.querySelector('.circle');
var counter = 0;
var intervalId = null;

window.addEventListener('click', nextSlide);
window.addEventListener('click', previousSlide);
rowCircle.addEventListener('click', clickSlide);

function switchView() {
  counter++;
  for (var i = 0; i < container.length; i++) {
    container[i].setAttribute('class', 'container hidden');
    circle[i].setAttribute('class', 'far fa-circle');
  }
  if (counter >= container.length) {
    counter = 0;
  }
  container[counter].setAttribute('class', 'container');
  circle[counter].setAttribute('class', 'fas fa-circle');
  clearInterval(intervalId);
  intervalId = setInterval(switchView, 3000);
  // console.log('counter:', counter);
}

function clickSlide(event) {
  // console.log('event', event.target);
  clearInterval(intervalId);
  var display = event.target.getAttribute('data-value');
  var displayToNumber = Number(display);
  for (var i = 0; i < circle.length; i++) {
    if (displayToNumber === i) {
      circle[i].setAttribute('class', 'fas fa-circle');
      container[i].setAttribute('class', 'container');
    } else {
      container[i].setAttribute('class', 'hidden');
      circle[i].setAttribute('class', 'far fa-circle');
      intervalId = setInterval(switchView, 3000);
    }
  }
}

function nextSlide() {
  for (var i = 0; i < next.length; i++) {
    if (event.target === next[i]) {
      for (var j = 0; j < container.length; j++) {
        container[j].setAttribute('class', 'container hidden');
        circle[j].setAttribute('class', 'far fa-circle');
      }
      counter++;
      if (container.length < counter) {
        counter = 1;
      }
      container[counter - 1].setAttribute('class', 'container');
      circle[counter - 1].setAttribute('class', 'fas fa-circle');
      clearInterval(intervalId);
    }
  }
}

function previousSlide() {
  for (var i = 0; i < previous.length; i++) {
    if (event.target === previous[i]) {
      for (var j = 0; j < container.length; j++) {
        container[j].setAttribute('class', 'container hidden');
        circle[j].setAttribute('class', 'far fa-circle');
      }
      counter--;
      if (container.length < counter) {
        counter = 1;
      } if (counter === 0) {
        counter = 5;
      }
      container[counter - 1].setAttribute('class', 'container');
      circle[counter - 1].setAttribute('class', 'fas fa-circle');
      clearInterval(intervalId);
    }
  }
}

intervalId = setInterval(switchView, 3000);
