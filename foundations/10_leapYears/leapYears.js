const leapYears = function (year) {
  //check for the leap year
  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  if (isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
