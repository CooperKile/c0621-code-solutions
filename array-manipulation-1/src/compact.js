/* exported compact */
function compact(array) {
  var newArr = [];
  var falseArr = [undefined, 0, -0, null, NaN, false, ''];
  for (var i = 0; i < array.length; i++) {
    if (!falseArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
