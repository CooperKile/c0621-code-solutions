/* exported capitalizeWords */
// start at first index
// take the first index and upper case it
// lower case the rest of the string until the space
// split at space
// repeat
function capitalizeWords(string) {
  string.split(' ');
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i].toLowerCase();
    }
  }
  return newString;
}
