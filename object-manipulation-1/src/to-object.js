/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  obj[key] = value;
  return obj;
}
