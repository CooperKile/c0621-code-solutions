var student = {
  firstName: 'Cooper',
  lastName: 'Kile',
  age: '19'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'pool cleaner';

console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'honda',
  model: 'civic',
  year: '2019'
};

vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;

console.log('vehicle[color]', vehicle['color']);
console.log('vehicle[isConvertible]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Dylan',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
