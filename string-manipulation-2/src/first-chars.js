/* exported firstChars */
function firstChars(length, string) {
  var newStr = '';
  for (var i = 0; i < length.length; i++) {
    newStr += (length[i] + string);
  }
  return newStr;
}
