const findTheOldest = function(arr) {
  let arrRed = arr.reduce((obj, value) => {
    if (value.yearOfDeath === undefined) {
      let currentDate = new Date();
      value.yearOfDeath = currentDate.getFullYear();
    }
    let age = parseInt(value.yearOfDeath) - parseInt(value.yearOfBirth);
    obj[age] = value;
    return obj;
  }, {});
  let keys = Object.keys(arrRed);
  keys.sort((a, b) => b - a);
  return arrRed[keys[0]];
};

// Do not edit below this line
module.exports = findTheOldest;
