/* exported includesSeven */
// start at index 0
// check if value is 7
// if value is not 7 continue to next index
// if value is = 7
function includesSeven(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
