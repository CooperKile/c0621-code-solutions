/* exported includes */
// set a variable to false
// if the array at index matches the value set the variable to true
// if not return false
function includes(array, value) {
  var includes = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includes = true;
    }
  }
  return includes;
}
