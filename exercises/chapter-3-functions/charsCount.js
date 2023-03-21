const countChar = (string, symbol) => {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === symbol) ++counter;
  }

  return counter;
};

const countBs = string => countChar(string, 'B');

console.log(countBs('BBC'));
console.log(countChar('kakkerlak', 'k'));
