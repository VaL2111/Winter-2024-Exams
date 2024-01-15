// Get day number

_parse_day_ = (s) => {
  let i;
  for (i = 0; i < D.length; i++) {
    if (s.startsWith(D[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

module.exports = _parse_day_;
