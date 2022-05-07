const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
  let sum = 0;
  console.log(arr)
	for (let num of arr) {
    sum += num;
  }
  return +sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let num of arr) {
    product *= num;
  }
  return product;
};

const power = function(x, n) {
	return x**n;
};

const factorial = function(num) {
  if (num === 0) {return 1}
  
	product = num;
  for (i = num-1; i > 1; i--) {
    product *= i;
  }
  return product;
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
