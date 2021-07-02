/* exported countdown */
function countdown(number) {
  var x = [];
  while (number >= 0) {
    x.push(number);
    number--;
  }
  return x;
}
