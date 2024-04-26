const removeFromArray = function(arr, ...args) {
  for (const arg of args) {
    for (let i = 0; i < arr.length; i++) {
      if (arg === arr[i]) {
        arr.splice(i, 1);
        i--;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
