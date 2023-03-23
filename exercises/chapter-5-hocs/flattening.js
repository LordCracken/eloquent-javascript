const flattening = arr => arr.reduce((acc, item) => acc.concat(item));
// Version with spread operator
// const flattening = arr => arr.reduce((acc, item) => [...acc, ...item]);

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flattening(arrays));
