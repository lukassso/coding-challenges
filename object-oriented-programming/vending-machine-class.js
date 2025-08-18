class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

class Drink extends Product {
  constructor(name, price, volume) {
    super(name, price);
    this.volume = volume;
  }
  display() {
    return `Drink: ${this.name} ${this.volume}, Price: ${this.price}`;
  }
}

class Snack extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  display() {
    return `Snack: ${this.name} ${this.weight}, Price: ${this.price}`;
  }
}

class VendingMachine {
  #inventory = [];
  #cash = 0;

  restock(product, quantity) {
    if (product instanceof Product) {
      this.#inventory.push({ item: product, quantity: quantity });
    } else {
      console.error("Error: Can only restock with a valid Product instance.");
    }
  }
  displayInventory() {
    console.log("---Display inventory---");
    this.#inventory.forEach((slot) => {
      console.log(`${slot.item.display()} | Quantity: ${slot.quantity}`);
    });
  }
  purchase(productName, insertedMoney) {
    const inventorySlot = this.#inventory.find(
      (slot) => slot.item.name === productName
    );

    if (!inventorySlot) {
      console.error(`Error: Product "${productName}" not found.`);
      return insertedMoney;
    }

    const product = inventorySlot.item;

    if (inventorySlot.quantity <= 0) {
      console.error(`Error: "${productName}" is out of stock.`);
      return insertedMoney;
    }

    this.#cash += product.price;
    inventorySlot.quantity--;
    const change = insertedMoney - product.price;
    console.log(`Dispensing: ${product.name}.`);
    return change;
  }
}

const machine = new VendingMachine();

// Create some products
const cola = new Drink("Cola", 4.0, 500);
const chips = new Snack("Chips", 5.5, 150);
const water = new Product("Water", 2.5);

// Restock the machine
machine.restock(cola, 10);
machine.restock(chips, 5);
machine.restock(water, 8);

// Display what's inside
machine.displayInventory();

// Try to buy something
console.log("\n--- Purchasing ---");
let change1 = machine.purchase("Cola", 5.0); // Success
console.log(`Your change: ${change1} PLN`); // Your change: 1 PLN

let change2 = machine.purchase("Chips", 5.0); // Not enough money
console.log(`Your change: ${change2} PLN`); // Your change: 5 PLN

let change3 = machine.purchase("Juice", 5.0); // Product not found
console.log(`Your change: ${change3} PLN`); // Your change: 5 PLN

console.log("\n--- Inventory after purchase ---");
machine.displayInventory(); // Cola should have quantity 9
