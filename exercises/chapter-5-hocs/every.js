// loop version
const every = (arr, test) => {
  for (const item of arr) {
    if (!test(item)) return false;
  }

  return true;
};

// version with some method
// const every = (arr, test) => {
//   if (arr.length === 0) return true;
//   if (!arr.some(test)) return false;
//   return every(arr.slice(1), test);
// };

// author's version with some (better than mine)
// const every = (arr, test) => !arr.some(item => !test(item));

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([2, 20, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
