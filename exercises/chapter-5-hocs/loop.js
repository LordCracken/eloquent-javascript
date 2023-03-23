// В упражнении автор указывает, что можно исопльзовать цикл для перебора значений
// Но я решил, что если писать свой цикл, то без встроенных циклов.
// Моя реализация использует рекурсию, как в функциональных ЯП
const loop = (value, condition, updateValue, action) => {
  if (!condition(value)) return;

  action(value);
  loop(updateValue(value), condition, updateValue, action);
};

loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log,
);
