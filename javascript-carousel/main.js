
var container = document.querySelectorAll('.container');
var next = document.querySelectorAll('.next');
var previous = document.querySelectorAll('.previous');
// var circle = document.querySelectorAll('.fa-circle');
var counter = 0;
var intervalId = null;

window.addEventListener('click', nextSlide);
window.addEventListener('click', previousSlide);
// window.addEventListener('click', changeView);

// function changeView() {
//   for (var i = 0; i < circle.length; i++) {
//     var circleVal = event.target.getAttribute('data-value');
//     if (circleVal === counter)
//   }
// var circleVal = event.target.getAttribute('data-value');
// if (circleVal === counter) {
//   circleVal.setAttribute('class', 'fas fa-circle');
// } console.log(circleVal);

switchView(counter);
function switchView() {
  for (var i = 0; i < container.length; i++) {
    container[i].setAttribute('class', 'container hidden');
  }
  counter++;
  if (container.length < counter) {
    counter = 1;
  }
  container[counter - 1].setAttribute('class', 'container');
  clearInterval(intervalId);
  intervalId = setInterval(switchView, 3000);
}

function nextSlide() {
  for (var i = 0; i < next.length; i++) {
    if (event.target === next[i]) {
      for (var j = 0; j < container.length; j++) {
        container[j].setAttribute('class', 'container hidden');
      }
      counter++;
      if (container.length < counter) {
        counter = 1;
      }
      container[counter - 1].setAttribute('class', 'container');
      clearInterval(intervalId);
      intervalId = setInterval(switchView, 3000);
    }
  }
}

function previousSlide() {
  for (var i = 0; i < previous.length; i++) {
    if (event.target === previous[i]) {
      for (var j = 0; j < container.length; j++) {
        container[j].setAttribute('class', 'container hidden');
      }
      counter--;
      if (container.length < counter) {
        counter = 1;
      } if (counter === 0) {
        counter = 5;
      }
      container[counter - 1].setAttribute('class', 'container');
      clearInterval(intervalId);
      intervalId = setInterval(switchView, 3000);
    }
  }
}
