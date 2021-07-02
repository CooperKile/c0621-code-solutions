/* exported findIndex */
// set the first index and the length
// check if item at index value equals number given
// if item at index doesn't equal number given, go to next index
// if item at index equals number gives, return index
// if item never found return -1
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  } return -1;
}
