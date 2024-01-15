// Get month number

const getMonthNumber = (s) => {
  for (let i = 0; i < months.length; i++) {
    if (s.toLowerCase().startsWith(Months[i])) {
      return i + 1;
    }
  }
  return -1;
}

const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

module.exports = getMonthNumber;
