/* exported oddOrEven */
// create new array
// check first item at index
// if value is even return even
// else return odd
function oddOrEven(numbers) {
  var x = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      x.push('even');
    } else {
      x.push('odd');
    }
  }
  return x;
}
