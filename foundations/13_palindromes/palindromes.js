const palindromes = function (word) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const cleaned_string = word
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  let reversed_word = cleaned_string.split("").reverse().join("");

  return cleaned_string === reversed_word;
};

palindromes("racecar");
palindromes("rac3e3car");
palindromes("A car, a man, a maraca.");
palindromes("racecar!");
palindromes("ZZZZ car, a man, a maracaz.");
palindromes("r3ace3car");

// Do not edit below this line
module.exports = palindromes;
