const palindromes = function (str) {
  let letters = str.toLowerCase().split("");
  letters = letters.filter(letter => "abcdefghijklmnopqrstuvwxyz0123456789".includes(letter));
  let originalStr = "";
  for (let letter of letters) {
    originalStr += letter;
  }
  let reverseStr = letters.reverse().join("");
  return originalStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
