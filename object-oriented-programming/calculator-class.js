class Calculator {
  #value;
  constructor() {
    this.#value = 0;
  }

  set value(newValue) {
    if (typeof newValue === "number") {
      this.#value = newValue;
    } else {
      console.error("wrong type");
    }
  }

  add(number) {
    this.#value += number;
    return this;
  }
  subtract(number) {
    this.#value -= number;
    return this;
  }
  multiply(number) {
    this.#value *= number;
    return this;
  }
  divide(number) {
    this.#value /= number;
    return this;
  }
  get result() {
    return this.#value;
  }
}

const calc = new Calculator();

// Method chaining in action
const finalValue = calc.add(10).multiply(3).subtract(5).divide(5).result;

console.log(`Final result: ${finalValue}`); // Final result: 5

// Using the setter to reset the value
calc.value = 100;
// Using the getter
console.log(`Current value: ${calc.result}`); // Current value: 100

// Another chain
const anotherValue = calc.subtract(50).divide(2).result;
console.log(`Another result: ${anotherValue}`); // Another result: 25

// Testing error handling
calc.divide(0); // Should log an error
calc.value = "hello"; // Should log an error
console.log(`Value after errors: ${calc.result}`); // Value after errors: 25
