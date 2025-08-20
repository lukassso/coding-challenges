class ShippingContext {
  #strategy;

  setStrategy(strategyClass) {
    this.#strategy = strategyClass;
  }
  calculateShipping(order) {
    return this.#strategy.calculate(order);
  }
}
class StandardShippingStrategy {
  calculate(order) {
    return order.total * 0.1;
  }
}
class ExpressShippingStrategy {
  calculate() {
    return 25;
  }
}
class NextDayShippingStrategy {
  calculate(order) {
    return order.itemCount * 1;
  }
}

// Raw order data
const order1 = { total: 150, itemCount: 3, shippingMethod: "standard" };
const order2 = { total: 80, itemCount: 5, shippingMethod: "nextday" };

// Your new OOP implementation
const context = new ShippingContext();

// Calculate for standard shipping
context.setStrategy(new StandardShippingStrategy());
const cost1 = context.calculateShipping(order1);
console.log(`Shipping cost for order 1 (Standard): ${cost1} PLN`); // 15 PLN

// Dynamically change the strategy for the same order
context.setStrategy(new ExpressShippingStrategy());
const cost2 = context.calculateShipping(order1);
console.log(`Shipping cost for order 1 (Express): ${cost2} PLN`); // 25 PLN

// Calculate for the second order
context.setStrategy(new NextDayShippingStrategy());
const cost3 = context.calculateShipping(order2);
console.log(`Shipping cost for order 2 (Next-day): ${cost3} PLN`); // 5 PLN
