// The "bad" procedural code we want to refactor
function processOrders(orders) {
  const SHIPPING_THRESHOLD = 100;

  orders.forEach(order => {
    let totalPrice = 0;
    order.items.forEach(item => {
      totalPrice += item.price * item.quantity;
    });

    let shippingCost = 0;
    if (totalPrice < SHIPPING_THRESHOLD) {
      shippingCost = 15;
    }
    
    const finalPrice = totalPrice + shippingCost;

    console.log(`Order #${order.id} for ${order.customerName}`);
    console.log(`  Total: ${totalPrice.toFixed(2)} PLN`);
    console.log(`  Shipping: ${shippingCost > 0 ? shippingCost.toFixed(2) + ' PLN' : 'FREE'}`);
    console.log(`  Final Amount: ${finalPrice.toFixed(2)} PLN\n`);
  });
}

// The raw data, just like in the original function
const orders = [
  { id: 1, customerName: 'John Doe', items: [ { price: 25, quantity: 2 }, { price: 50, quantity: 1 } ] },
  { id: 2, customerName: 'Jane Smith', items: [ { price: 110, quantity: 1 } ] }
];

processOrders(orders)

