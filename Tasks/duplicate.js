// Return an array without duplicates

'use strict';

const duplicate = (value, N) => {
  if (N <= 0){
     return [];
  } else {
    let resultArray = [];
    for (let i = 0; i < N; i++) {
      resultArray.push(value);
    }
    return resultArray;
  }
};

module.exports = duplicate;
