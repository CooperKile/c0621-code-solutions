/* exported filterOutStrings */
// empty array for the numbers
// start at index 0
// if value at index is a number, retrun to the array
function filterOutStrings(values) {
  var x = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      x.push(values[i]);
    }
  }
  return x;
}
