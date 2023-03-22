const reverseArray = arr => {
  const reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
};

const reverseArrayInPlace = arr => {
  for (let i = arr.length - 2; i >= 0; i--) {
    const item = arr.splice(i, 1);
    arr.push(...item);
  }
};

let array = [1, 2, 3, 4, 5];

console.log(reverseArray([1, 2, 3]));
reverseArrayInPlace(array);
console.log(array);
