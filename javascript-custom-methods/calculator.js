/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return Math.pow(x, 2);
  },
  sumAll: function (numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAll = numbers[i] + sumAll;
    }
    return sumAll;
  },
  getAverage: function (numbers) {
    var getAverage = 0;
    for (var i = 0; i < numbers.length; i++) {
      getAverage = numbers[i] + getAverage;
    }
    var average = getAverage / numbers.length;
    return average;
  }
};
