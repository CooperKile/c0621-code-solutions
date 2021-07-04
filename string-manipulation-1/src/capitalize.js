/* exported capitalize */
// start the index at 0
// take the value at 0 and capitalize it
// add the rest of the sring starting at the first positing and lowercase it
// return the word
function capitalize(word) {
  return word[0].toUpperCase(word) + word.substring(1).toLowerCase(word);
}
