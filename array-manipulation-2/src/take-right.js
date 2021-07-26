/* exported takeRight */
// take the length;
// reutrn the count from the array
// if the count matches the array return
function takeRight(array, count) {
  var newArr = [];
  for (var i = (array.length - count); i < array.length; i++) {
    newArr.push(array[i]);
  }
  if (array.length < count) {
    newArr = array;
  }
  return newArr;
}
