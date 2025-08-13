const createAdvancedCounter = (initialValue, step, onIncrement) => {
  let counter = initialValue;
  return () => {
    counter += step;
    onIncrement(counter);
    return counter;
  };
};

const myCounter = createAdvancedCounter(2, 1, (count) =>
  console.log(`New value is ${count}`)
);

let value1 = myCounter();
console.log(value1);

let value2 = myCounter();
console.log(value2);

console.log(myCounter());
