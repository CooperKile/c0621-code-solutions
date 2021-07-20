/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (typeof amount !== 'number' || !Number.isInteger(amount) || isNaN(amount) || amount <= 0) {
    return false;
  }
  this.transactions.push(new Transaction('deposit', amount));
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (typeof amount !== 'number' || !Number.isInteger(amount) || isNaN(amount) || amount <= 0) {
    return false;
  }
  this.transactions.push(new Transaction('withdrawal', amount));
  return true;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
