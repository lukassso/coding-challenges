// The "bad" code we want to refactor
class ShippingCalculator {
  calculate(order) {
    let cost = 0;
    // This switch statement is rigid and hard to maintain
    switch (order.shippingMethod) {
      case 'standard':
        // Standard shipping: 10% of the total order value
        cost = order.total * 0.1;
        break;
      case 'express':
        // Express shipping: Flat rate of 25 PLN
        cost = 25;
        break;
      case 'nextday':
        // Next-day shipping: 1 PLN per item in the order
        cost = order.itemCount * 1;
        break;
      default:
        // Default to standard shipping
        cost = order.total * 0.1;
    }
    return cost;
  }
}

const testOrder = { total: 150, itemCount: 3, shippingMethod: 'standard' };
const calculator = new ShippingCalculator();
const shippingCost = calculator.calculate(testOrder);

console.log(shippingCost)