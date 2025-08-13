const transactions = [
  { type: "income", amount: 2500 },
  { type: "expense", amount: 150 },
  { type: "expense", amount: 300 },
  { type: "income", amount: 800 },
  { type: "expense", amount: 50 },
];

const analyzeTransactions = (transactionHistory) => {
  const initValue = {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    transactionCount: 0,
  };

  const summary = transactionHistory.reduce((acc, curr) => {
    if (curr.type === "income") {
      acc.totalIncome += curr.amount;
    } else {
      acc.totalExpense += curr.amount;
    }
    acc.transactionCount++;

    return acc;
  }, initValue);

  return {
    ...summary,
    balance: summary.totalIncome - summary.totalExpense,
  };
};

const financialsummary = analyzeTransactions(transactions);
console.log(financialsummary);
