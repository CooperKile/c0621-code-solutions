/* exported truncate */
// we will be returning a shortened version of the string
// the length number determines how many characters will be returned
function truncate(length, string) {
  if (string.length <= length) {
    return string + '...';
  }
  return string.slice(string, length) + '...';
}
