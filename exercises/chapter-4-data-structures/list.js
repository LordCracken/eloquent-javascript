// Решение автора, Хавербеке заполнял лист с конца, я заполнял с начала
const arrayToList = arr => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
};

// Решение автора, моё было через цикл while
const listToArray = list => {
  const arr = [];

  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  return arr;
};

const prepend = (value, list) => {
  return { value, rest: list };
};

const nth = (list, i) => {
  if (!list) return;
  if (i === 0) return list.value;
  return nth(list.rest, i - 1);
};

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
