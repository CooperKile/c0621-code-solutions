/* exported drop */
// take the length of the count
// reutrn the rest of the array after the count is up
function drop(array, count) {
  var newArr = [];
  for (var i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
