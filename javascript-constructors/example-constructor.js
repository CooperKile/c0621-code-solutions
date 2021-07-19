function ExampleConstructor() {}
console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);
var newFunc = new ExampleConstructor();
console.log('newFunc value:', newFunc);
var instOf = newFunc instanceof ExampleConstructor;
console.log('instanceof:', instOf);
