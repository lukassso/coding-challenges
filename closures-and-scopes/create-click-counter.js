const { JSDOM } = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><button id="myBtn">Kliknij</button>`);
global.document = dom.window.document;

const createClickCounter = (buttonId, callback) => {
  let counter = 0;
  const myBtn = document.getElementById(buttonId);
  myBtn.addEventListener('click', () => {
    counter++;
    callback(counter);
  });
  return {
    get: () => counter,
    reset: () => {
      return (counter = 0);
    },
  };
};

const clickOne = createClickCounter('myBtn', (val) => console.log(`Klik: ${val}`))

document.getElementById('myBtn').click();
document.getElementById('myBtn').click();
document.getElementById('myBtn').click();


console.log(clickOne.get())
console.log(clickOne.get())
