
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(reducer);
console.log('sum:', sum);
const multiply = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiply);
console.log('product:', product);
const total = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    accumulator = accumulator + currentValue.amount;
  } else {
    accumulator = accumulator - currentValue.amount;
  }
  return accumulator;
};
const balance = account.reduce(total, 0);
console.log('balance:', balance);
const target = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
const composite = traits.reduce(target, {});
console.log('composite:', composite);
