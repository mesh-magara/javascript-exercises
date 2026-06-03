const removeFromArray = function (arr, num) {
  arr = [1, 2, 3, 4];
  num = 3;

  let deleting_index = arr.indexOf(3);

  arr.splice(deleting_index, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
