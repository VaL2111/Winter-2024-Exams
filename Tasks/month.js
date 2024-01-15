// Get month number

const getMonthNumber = (s) => {
  const input = s.toLowerCase();
  for (let i = 0; i < months.length; i++) {
    if (input.startsWith(Months[i])) {
      return i + 1;
    }
  }
  return -1;
};

const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

module.exports = getMonthNumber;
