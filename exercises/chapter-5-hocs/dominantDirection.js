// Для работы требуется окружение из песочницы по адресу
// https://eloquentjavascript.net/code/#5.4
const dominantDirection = text => {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  }).filter(({ name }) => name !== null);

  if (scripts.length === 0) return 'No scripts found';

  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
};

console.log(dominantDirection('Hello!'));
console.log(dominantDirection('Hey, مساء الخير'));
