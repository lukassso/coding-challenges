class Coffee {
  cost() {
    throw new Error("This method must be implemented by a subclass.");
  }
  getDescription() {
    throw new Error("This method must be implemented by a subclass.");
  }
}

class SimpleCoffee extends Coffee {
  cost() {
    return 10;
  }
  getDescription() {
    return "Simple Coffee";
  }
}

class CoffeeDecorator extends Coffee {
  #coffee;
  constructor(coffee) {
    super();
    if (coffee instanceof Coffee) {
      this.#coffee = coffee;
    } else {
      throw new Error("Decorator must wrap an instance of Coffee.");
    }
  }
  cost() {
    return this.#coffee.cost();
  }
  getDescription() {
    return this.#coffee.getDescription();
  }
}

class WithMilk extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }
  cost() {
    return super.cost() + 2;
  }
  getDescription() {
    return `${super.getDescription()}, with milk`;
  }
}

class WithSugar extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }
  cost() {
    return super.cost() + 1;
  }
  getDescription() {
    return `${super.getDescription()}, with sugar`;
  }
}

let myCoffee = new SimpleCoffee();
console.log(`${myCoffee.getDescription()} costs ${myCoffee.cost()}`);
// Expected: "Simple Coffee costs 10"

// Let's decorate it!
myCoffee = new WithMilk(myCoffee);
console.log(`${myCoffee.getDescription()} costs ${myCoffee.cost()}`);
// Expected: "Simple Coffee, with milk costs 12"

myCoffee = new WithSugar(myCoffee);
console.log(`${myCoffee.getDescription()} costs ${myCoffee.cost()}`);
// Expected: "Simple Coffee, with milk, with sugar costs 13"

// You can also create a complex coffee in one go
const fancyCoffee = new WithSugar(new WithMilk(new SimpleCoffee()));
console.log(`${fancyCoffee.getDescription()} costs ${fancyCoffee.cost()}`);
// Expected: "Simple Coffee, with milk, with sugar costs 13"
