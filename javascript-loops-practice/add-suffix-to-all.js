/* exported addSuffixToAll */
// storage for the new words with suffix
// look at each index, starting at 0
// concatinate a string of 'ity' to each string
// take that new string and store it store it
function addSuffixToAll(words, suffix) {
  var x = [];
  for (var i = 0; i < words.length; i++) {
    x.push(words[i] + suffix);
  } return x;
}
