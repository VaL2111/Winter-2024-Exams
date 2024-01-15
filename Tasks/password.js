// Generate random password

const CreationPassword = (alphabet, length) => {
  const alphabetLength = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    Index = Math.floor(Math.random() * MAX);
    key = key + alphabet[Index];
  }
  return key;
};

module.exports = GeneratePassword;
