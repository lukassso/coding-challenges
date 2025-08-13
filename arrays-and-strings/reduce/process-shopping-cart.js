const shoppingCart = [
  { name: "Laptop", price: 4500, quantity: 1 },
  { name: "Myszka", price: 120, quantity: 2 },
  { name: "Klawiatura", price: 250, quantity: 1 },
  { name: "Monitor", price: 950, quantity: 2 },
];

const processShoppingCart = (shCards) => {
  // const {name, price, quantity} = shoppingCart;
  let initialSummary = {
    totalPrice: 0,
    totalItems: 0,
    itemNames: [],
  };

  const finalSummary = shCards.reduce((acc, curr) => {
    acc.totalPrice += curr.price;
    acc.totalItems += curr.quantity;
    acc.itemNames.push(curr.name);
    return acc;
  }, initialSummary);
  return finalSummary

};

const sumarizeCarts = processShoppingCart(shoppingCart);
console.log(sumarizeCarts)
