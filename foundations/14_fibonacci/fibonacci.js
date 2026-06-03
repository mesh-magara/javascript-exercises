const fibonacci = function (n) {
  n = Number(n);

  fibb_array = [];

  for (let i = 0; i <= n; ++i) {
    let fibb_number;

    if (i == 0) {
      fibb_number = 0;
      fibb_array.push(fibb_number);
    } else if (i == 1) {
      fibb_number = 1;

      fibb_array.push(fibb_number);
    } else {
      fibb_number = fibb_array[i - 1] + fibb_array[i - 2];
      fibb_array.push(fibb_number);
    }
  }

  if (n < 0) {
    return "OOPS";
  } else {
    return fibb_array[n];
  }
};
fibonacci(4);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
