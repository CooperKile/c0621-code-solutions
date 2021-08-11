const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const operation = process.argv[3];

if (operation === 'plus') {
  console.log(add(process.argv[2], process.argv[4]));
} else if (operation === 'minus') {
  console.log(subtract(process.argv[2], process.argv[4]));
} else if (operation === 'times') {
  console.log(multiply(process.argv[2], process.argv[4]));
} else if (operation === 'over') {
  console.log(divide(process.argv[2], process.argv[4]));
}
