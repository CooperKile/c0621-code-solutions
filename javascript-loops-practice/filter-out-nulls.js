/* exported filterOutNulls */
// create a container to hold the values
// start at the first index
// if the item at index is not equal to null, store into array
function filterOutNulls(values) {
  var x = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] != null) {
      x.push(values[i]);
    }
  }
  return x;
}
