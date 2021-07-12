// query the dom for tab container, node list of tab and view elements
// add an event listener to the tab container for a click
// create a function for when click event is executed
// if the event target matches then loop through the tab list node
// compare the current position to each of the event targets
// if the event target is equal to the element update its className
// after updating the class name make the element active
// get the value of the data view attribute of the event target and assign it a variable
// create a loop, loop through the view list elements,

var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].className = 'tab active';
      } else {
        $tabList[i].className = 'tab';
      }
    }
    var $viewAttribute = event.target.getAttribute('data-view');
    for (var j = 0; j < $viewList.length; j++) {
      if ($viewList[j].getAttribute('data-view') === $viewAttribute) {
        $viewList[j].className = 'view active';
      } else {
        $viewList[j].className = 'view hidden';
      }
    }
  } return $viewList;
});
