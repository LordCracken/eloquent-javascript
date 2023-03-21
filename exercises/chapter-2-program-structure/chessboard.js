// Автор в своём решении использовал цикл в цикле. Скорость алгоритма O(n^2)
// Я использовал два цикла. Скорость алгоритма O(n)
// Решение автора более элегантное, моё более оптимизированное

const drawChessboard = size => {
  let line = '';
  let reversedLine = '';
  let result = '';

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      line += ' ';
      reversedLine += '#';
    }
    if (i % 2 === 0) {
      line += '#';
      reversedLine += ' ';
    }
  }

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) result += `${line}\n`;
    if (i % 2 === 0) result += `${reversedLine}\n`;
  }

  return result;
};

console.log(drawChessboard(8));
