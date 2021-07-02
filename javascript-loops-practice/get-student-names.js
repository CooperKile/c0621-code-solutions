/* exported getStudentNames */
// an array to store the students name
// look at each index, starting at 0
// take the value, store it back into the array
function getStudentNames(students) {
  var studentName = [];
  for (var i = 0; i < students.length; i++) {
    studentName.push(students[i].name);
  } return studentName;
}
