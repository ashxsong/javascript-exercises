const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum += num, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod *= num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let prod = 1;
  for (i = 1; i < num + 1; i++) {
    prod *= i;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
