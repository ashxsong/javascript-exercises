const fibonacci = function(num) {
  num = parseInt(num);
  if (num === 0) {
    return 0;
  }
  if (num < 0) {
    return "OOPS";
  }
  let seq = [1, 1];
  for (let i = 0; i < num - 2; i++) {
    seq.push(seq[i] + seq[i + 1]);
  }
  return seq[seq.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
