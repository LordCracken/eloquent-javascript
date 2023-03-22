const deepEqual = (value1, value2) => {
  if (value1 === value2) return true;
  if (typeof value1 !== 'object' || typeof value2 !== 'object') return false;
  if (value1 === null || value2 === null) return false;

  for (const key in value1) {
    return deepEqual(value1[key], value2[key]);
  }
};

console.log(deepEqual(0, 0));
let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
