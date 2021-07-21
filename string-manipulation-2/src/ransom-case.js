/* exported ransomCase */
// start a for loop
// if the value is an odd number lowercase it
// if the value is an even number capatalize it
// strings are immutable so we create an empty string

function ransomCase(string) {
  var str = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      str += string[i].toLowerCase();
    } else {
      str += string[i].toUpperCase();
    }
  }
  return str;
}
