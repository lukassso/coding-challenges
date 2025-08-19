class OrderProcessor {
  constructor(shippingCost, shippingThreshold) {
    this.shippingCost = shippingCost;
    this.shippingThreshold = shippingThreshold;
  }

  process(ordersData) {
    ordersData.forEach((order) => {
      const orderClass = new Order(order.id, order.items, order.customerName);
      console.log(`Order #${orderClass.id} for ${orderClass.customerName}`);
      console.log(`  Total: ${orderClass.getTotalPrice()} PLN`);
      console.log(
        `  Shipping: ${
          orderClass.isEligibleForFreeShipping(this.shippingThreshold)
            ? this.shippingCost + " PLN"
            : "FREE"
        }`
      );
      console.log(
        `  Final Amount: ${orderClass.getFinalPrice(
          this.shippingCost,
          this.shippingThreshold
        )} PLN\n`
      );
    });
  }
}

class Order {
  #items;
  constructor(id, items, customerName) {
    this.id = id;
    this.#items = items;
    this.customerName = customerName;
  }
  getTotalPrice() {
    return this.#items.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
  }
  isEligibleForFreeShipping(threshold) {
    return this.getTotalPrice() <= threshold ? true : false;
  }

  getFinalPrice(shippingCost, shippingThreshold) {
    if (this.getTotalPrice() < shippingThreshold) {
      return shippingCost + this.getTotalPrice();
    } else {
      return this.getTotalPrice();
    }
  }
}

// The raw data, just like in the original function
const ordersData = [
  {
    id: 1,
    customerName: "John Doe",
    items: [
      { price: 25, quantity: 2 },
      { price: 50, quantity: 1 },
    ],
  },
  { id: 2, customerName: "Jane Smith", items: [{ price: 110, quantity: 1 }] },
];

const processor = new OrderProcessor(15, 100); // shippingCost, shippingThreshold
processor.process(ordersData);

// --- Expected output (should be identical to the old function's output) ---
// Order #1 for John Doe
//   Total: 100.00 PLN
//   Shipping: FREE
//   Final Amount: 100.00 PLN
//
// Order #2 for Jane Smith
//   Total: 50.00 PLN
//   Shipping: 15.00 PLN
//   Final Amount: 65.00 PLN
