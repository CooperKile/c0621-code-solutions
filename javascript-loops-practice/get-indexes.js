/* exported getIndexes */
// create storage for the indexes
// look at the array one index at a time, starting at the first index (0)
// - add current index to list of indexes
// return list of indexes
function getIndexes(array) {
  var index = [];
  for (var i = 0; i < array.length; i++) {
    index.push(i);
  } return index;
}
