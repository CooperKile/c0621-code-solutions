function converMinutesToSeconds(minutes) {
  var totalSeconds = minutes * 60;
  return totalSeconds;
}
var converMinutesToSecondsResult = converMinutesToSeconds(3);
console.log('converMinutesToSecondsResult', converMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetName = greet('Cooper');
console.log('greetName:', greetName);

function getArea(width, height) {
  var totalArea = width * height;
  return totalArea;
}

var getAreaResult = getArea(10, 6);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var x = person.firstName;
  return x;
}

var getFirstNameResult = getFirstName({ firstName: 'Cooper', lastName: 'Kile' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
