var x = 10;
var y = 13;
var z = 50;
var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);
var heros = ['superman', 'batman', 'aquaman', 'spiderman'];
var randomNumber = Math.random();
randomNumber *= heros.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heros[randomIndex];
console.log('randomHero', randomHero);

var library = [
  {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien'
  },
  {
    title: 'Harry Potter',
    author: 'J.K Rowling'
  },
  {
    title: 'HTML & CSS',
    author: 'Jon Ducket'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Cooper Kile';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
