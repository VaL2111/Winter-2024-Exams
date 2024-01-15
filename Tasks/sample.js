// Get one random element from an array

'use strict';

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

module.exports = getRandomElement;
