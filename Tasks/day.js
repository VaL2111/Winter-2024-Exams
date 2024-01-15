// Get day number

const parseDay = (s) => {
  for (let i = 0; i < daysOfWeek.length; i++) {
    if (s.startsWith(daysOfWeek[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

module.exports = parseDay;
