const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear(); //set the current year to be the death year
  }
  return death - birth; //return age
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath,
    );

    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

module.exports = findTheOldest;
