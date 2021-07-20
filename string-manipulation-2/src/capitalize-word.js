/* exported capitalizeWord */
// return the first letter of the string as an uppercase
// concatinate the rest of the letters as lowercase
// if word = Javascript
// Upper Case the J and the S
function capitalizeWord(word) {
  var firstLetter = word[0].toUpperCase();
  var restOfWord = word.substring(1).toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return firstLetter + restOfWord;
}
