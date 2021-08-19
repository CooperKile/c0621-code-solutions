const { error } = require('console');
const takeAChance = require('./take-a-chance');
const promise = takeAChance('Cooper');
promise.then(value => {
  console.log(value);
});
promise.catch(error => {
  console.log(error.message);
});
