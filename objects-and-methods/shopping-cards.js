const shoppingCart = {
  items: [],
  discount: 0.15,
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  },
  listItems() {
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price} PLN`
      );
    });
  },
  getTotal() {
    const preDiscountTotal = this.items.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0);
    const finalTotal = preDiscountTotal * (1 - this.discount);
    return finalTotal;
  },
  displayTotalWithDelay() {
    const displayTotal = this.getTotal();
    return setTimeout(function () {
      console.log(`Final amount to pay (after 1s): ${displayTotal}`);
    }, 1000);
  },
};

shoppingCart.addItem("Laptop", 4500, 1);
shoppingCart.addItem("Mouse", 150, 2);
shoppingCart.addItem("Keyboard", 250, 1);

shoppingCart.listItems();

// Expected output:
// Product: Laptop, Quantity: 1, Price: 4500 PLN
// Product: Mouse, Quantity: 2, Price: 150 PLN
// Product: Keyboard, Quantity: 1, Price: 250 PLN

const total = shoppingCart.getTotal();
const preDiscountTotal = total / (1 - shoppingCart.discount);

console.log(`Total amount (before discount): ${preDiscountTotal} PLN`);
console.log(
  `Amount to pay (after ${shoppingCart.discount * 100}% discount): ${total} PLN`
);

shoppingCart.displayTotalWithDelay();
// Expected output after 1 second:
// "Final amount to pay (after 1s): 4292.5 PLN"
