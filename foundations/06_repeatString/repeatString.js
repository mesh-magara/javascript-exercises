const repeatString = function (name, times) {
  repeatedWord = "";
  if (times < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < 3; ++i) {
      repeatedWord += name;
    }
  }
  return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
