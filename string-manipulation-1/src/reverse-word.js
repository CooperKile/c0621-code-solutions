/* exported reverseWord */
function reverseWord(word) {
  var words = '';
  for (var i = word.length - 1; i >= 0; i--) {
    words += word[i];
  }
  return words;
}
