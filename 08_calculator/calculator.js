const add = function(a, b) {
   return a + b
};

const subtract = function(a, b) {
  return a - b
	
};

const sum = function(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
	
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)

};

const power = function(a, b) {
  return Math.pow(a, b)
	
};

const factorial = function(n) {
  if (n == 0){return 1}
  return factorial(n-1) * n
	
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
