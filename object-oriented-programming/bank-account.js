class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
    this.timestamp = new Date();
  }
}

class BankAccount {
  #balance;
  #transactions = [];
  constructor(ownerName, startingBalance = 0) {
    this.ownerName = ownerName;
    this.#balance = startingBalance;
  }
  get balance() {
    return this.#balance;
  }
  get owner() {
    return this.ownerName;
  }
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      const newTransaction = new Transaction("deposit", amount);
      this.#transactions.push(newTransaction);
    } else return console.error("Error: Withdrawal amount must be positive.");
  }
  withdraw(amount) {
    if (amount > 0) {
      this.#balance -= amount;
      const newTransaction = new Transaction("withdrawal", amount);
      this.#transactions.push(newTransaction);
    } else return console.error("Error: Withdrawal amount must be positive.");

    if (amount > this.#balance) {
      throw new Error("Insufficient funds.");
    }
  }
  getTransactionHistory() {
    return this.#transactions;
  }
}

const myAccount = new BankAccount("John Doe", 100);

console.log(`Account owner: ${myAccount.owner}`); // Account owner: John Doe
console.log(`Initial balance: ${myAccount.balance} PLN`); // Initial balance: 100 PLN

// Perform some transactions
myAccount.deposit(50);
myAccount.withdraw(30);

console.log(`Current balance: ${myAccount.balance} PLN`); // Current balance: 120 PLN

// Try an invalid withdrawal
try {
  myAccount.withdraw(200);
} catch (error) {
  console.error(`Transaction failed: ${error.message}`); // Transaction failed: Insufficient funds.
}

console.log(`Balance after failed transaction: ${myAccount.balance} PLN`); // Balance after failed transaction: 120 PLN

// Get transaction history
console.log("\n--- Transaction History ---");
const history = myAccount.getTransactionHistory();
history.forEach((tx) => {
  console.log(
    `Type: ${tx.type}, Amount: ${
      tx.amount
    } PLN, Date: ${tx.timestamp.toLocaleDateString()}`
  );
});
