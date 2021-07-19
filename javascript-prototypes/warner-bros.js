/* exported yakko, wakko, dot */

var yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

var wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};

var dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
};

var description = {
  describe: function () {
    var describe = this.name + ' is a ' +
    this.age + '-year-old Warner ' + this.role + '.';
    return describe;
  }
};

Object.setPrototypeOf(yakko, description);
Object.setPrototypeOf(wakko, description);
Object.setPrototypeOf(dot, description);
