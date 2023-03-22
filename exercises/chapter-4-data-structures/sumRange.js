const range = (start, end, step = 1) => {
  const range = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) range.push(i);
  } else {
    for (let i = start; i >= end; i += step) range.push(i);
  }

  return range;
};

const sum = range => range.reduce((acc, value) => acc + value, 0);

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
