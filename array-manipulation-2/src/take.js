/* exported take */
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  if (array.length < count) {
    newArr = array;
  }
  return newArr;
}
