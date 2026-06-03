const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, item) => {
    return total * item;
  }, 1);
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  let factorial_result = 1;
  if (number === 0) {
    factorial_result = 1;
  }

  for (let i = number; i >= 1; --i) {
    factorial_result *= i;
  }

  return factorial_result;
};

add(0, 0);
add(2, 2);
add(2, 6);

subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7);

sum([]);
sum([7]);
sum([7, 11]);

multiply([2, 4]);
multiply([2, 4, 6, 8, 10, 12, 14]);

power(4, 3);
power(3, 10);

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
