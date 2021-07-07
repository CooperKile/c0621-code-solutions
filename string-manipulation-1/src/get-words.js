/* exported getWords */
// use the string split method
// using the string split method, we retrun an array

function getWords(string) {
  if (string === '') {
    return [];
  }
  var words = string.split(' ');
  return words;
}
