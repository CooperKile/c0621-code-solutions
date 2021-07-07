/* exported isVowel */
// make an array with vowels
// compare string to a, e, i, o, u
// if equal to vowel return tru
// else return false
function isVowel(char) {
  var vowels = ['A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowels.length; i++) {
    if (char.toUpperCase(char) === vowels[i]) {
      return true;
    }
  }
  return false;
}
