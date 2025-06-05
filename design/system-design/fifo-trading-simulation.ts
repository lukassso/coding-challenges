// Model symulatora FIFO akcji dla obliczania zysków i podatków
// FIFO stock portfolio simulator for calculating profits and taxes

// Definicja transakcji kupna (zakupu akcji)
// Definition of a stock purchase transaction
type Transaction = {
  date: string;        // data transakcji / transaction date
  quantity: number;    // liczba akcji / number of shares
  price: number;       // cena za akcję / price per share
};

// Klasa reprezentująca portfel inwestycyjny z symulacją FIFO
// Class representing an investment portfolio with FIFO simulation
class Portfolio {
  fifoQueue: Transaction[] = []; // kolejka FIFO dla akcji / FIFO queue for stocks
  realizedCash: number = 0;      // gotówka po sprzedaży / cash after sales
  taxesPaid: number = 0;         // suma zapłaconych podatków / total taxes paid
  totalRealizedProfit: number = 0; // całkowity zrealizowany zysk brutto / total gross realized profit
  investedCash: number = 0;      // wydana gotówka / cash invested

  // Kupno akcji / Buying stocks
  buy(date: string, quantity: number, price: number) {
    this.fifoQueue.push({ date, quantity, price });
    this.investedCash += quantity * price;
  }

  // Sprzedaż akcji zgodnie z FIFO / Selling stocks using FIFO
  sell(sellQuantity: number, sellPrice: number) {
    let remainingToSell = sellQuantity;
    let totalProfit = 0;

    // Przechodzimy przez kolejkę FIFO aż sprzedamy wymaganą liczbę akcji
    // Process FIFO queue until the required quantity is sold
    while (remainingToSell > 0 && this.fifoQueue.length > 0) {
      let lot = this.fifoQueue[0];
      let sellFromLot = Math.min(lot.quantity, remainingToSell);

      const cost = sellFromLot * lot.price;    // koszt zakupu partii akcji / purchase cost of lot
      const revenue = sellFromLot * sellPrice; // przychód ze sprzedaży / revenue from sale
      const profit = revenue - cost;           // zysk z tej sprzedaży / profit from this sale

      totalProfit += profit;

      lot.quantity -= sellFromLot;
      if (lot.quantity === 0) this.fifoQueue.shift(); // usuwamy partię jeśli sprzedana / remove lot if fully sold

      remainingToSell -= sellFromLot;
    }

    const tax = totalProfit * 0.19; // podatek 19% od zysku / 19% profit tax
    this.taxesPaid += tax;
    this.realizedCash += (sellQuantity * sellPrice) - tax;
    this.totalRealizedProfit += totalProfit;
  }

  // Oblicz bieżącą wartość pozostałych akcji przy danej cenie rynkowej
  // Calculate the current value of remaining stocks at the given market price
  getCurrentValue(currentPrice: number) {
    const remainingShares = this.fifoQueue.reduce((sum, lot) => sum + lot.quantity, 0);
    return remainingShares * currentPrice;
  }

  // Zwraca liczbę pozostałych akcji / Returns number of remaining shares
  getRemainingShares() {
    return this.fifoQueue.reduce((sum, lot) => sum + lot.quantity, 0);
  }

  // Podsumowanie stanu portfela / Portfolio summary
  summary(currentPrice: number) {
    const currentValue = this.getCurrentValue(currentPrice);
    const totalWealth = this.realizedCash + currentValue; // całkowity majątek / total wealth
    const netCashFlow = this.realizedCash - this.investedCash; // saldo gotówki netto / net cash flow
    const remainingShares = this.getRemainingShares();

    return {
      investedCash: this.investedCash,
      realizedCash: this.realizedCash,
      netCashFlow,
      taxesPaid: this.taxesPaid,
      totalRealizedProfit: this.totalRealizedProfit,
      currentValue,
      totalWealth,
      remainingShares
    };
  }
}

// Tryb aktywny - pełna symulacja na podstawie scenariusza
// Active mode - full simulation based on scenario
const active = new Portfolio();

// Iteracja 1
active.buy("Start", 200, 150)e
active.sell(80, 230);
active.buy("Buy1", 50, 220);
active.sell(44, 250);

// Iteracja 2
active.sell(50, 300);
active.buy("Buy2", 25, 280);
active.sell(25, 330);

// Iteracja 3
active.sell(25, 360);
active.buy("Buy3", 14, 330);
active.sell(15, 380);

// Iteracja 4
active.sell(40, 400);
active.buy("Buy4", 10, 380);
active.sell(20, 420);

const activeSummary = active.summary(420);
console.log("\nAKTYWNA STRATEGIA:");
// Active Strategy
console.log(`Wydana gotówka na zakupy: ${activeSummary.investedCash} zł`); // Invested cash
console.log(`Gotówka po sprzedaży i podatkach: ${activeSummary.realizedCash} zł`); // Realized cash after tax
console.log(`Saldo gotówki netto: ${activeSummary.netCashFlow} zł`); // Net cash flow
console.log(`Suma zapłaconych podatków: ${activeSummary.taxesPaid} zł`); // Total taxes paid
console.log(`Zrealizowany zysk brutto: ${activeSummary.totalRealizedProfit} zł`); // Gross realized profit
console.log(`Aktualna wartość posiadanych akcji: ${activeSummary.currentValue} zł`); // Current stock value
console.log(`Całkowity majątek: ${activeSummary.totalWealth} zł`); // Total wealth
console.log(`Pozostała ilość akcji: ${activeSummary.remainingShares} sztuk`); // Remaining shares

// Tryb pasywny - kup i trzymaj
// Passive mode - buy and hold
const passive = new Portfolio();
passive.buy("Start", 200, 150);
const passiveSellValue = 200 * 420;
const passiveCost = 200 * 150;
const passiveProfit = passiveSellValue - passiveCost;
const passiveTax = passiveProfit * 0.19;
const passiveNet = passiveSellValue - passiveTax;

console.log("\nPASYWNA STRATEGIA:");
// Passive Strategy
console.log(`Wartość sprzedaży: ${passiveSellValue} zł`); // Sale value
console.log(`Koszt zakupu: ${passiveCost} zł`); // Purchase cost
console.log(`Zysk brutto: ${passiveProfit} zł`); // Gross profit
console.log(`Podatek: ${passiveTax} zł`); // Tax
console.log(`Majątek końcowy netto: ${passiveNet} zł`); // Final net wealth
