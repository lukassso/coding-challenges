class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
    this.isEngineOn = false;
  }

  turnOn() {
    this.isEngineOn = true;
    console.log(`Engine of ${this.model} is ON.`);
  }

  turnOff() {
    this.isEngineOn = false;
    this.speed = 0;
    console.log(`Engine of ${this.model} is OFF.`);
  }

  accelerate(amount) {
    if (this.isEngineOn) {
      this.speed += amount;
    } else {
      console.log("Cannot accelerate. The engine is off.");
    }
  }

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
  }

  displayStatus() {
    const engineStatus = this.isEngineOn ? "ON" : "OFF";
    console.log(
      `Car: ${this.year} ${this.model}. Speed: ${this.speed}. Engine: ${engineStatus}.`
    );
  }
}

// This is how you create an instance of a class
const myCar = new Car("Toyota", "Corolla", 2022);

myCar.displayStatus();
// Expected output: "Car: 2022 Toyota Corolla. Speed: 0 km/h. Engine: OFF."

myCar.accelerate(50);
// Expected output: "Cannot accelerate. The engine is off."

myCar.turnOn();
// Expected output: "Engine of Toyota Corolla is ON."

myCar.accelerate(50);
myCar.displayStatus();
// Expected output: "Car: 2022 Toyota Corolla. Speed: 50 km/h. Engine: ON."

myCar.accelerate(30);
myCar.brake(20);
myCar.displayStatus();
// Expected output: "Car: 2022 Toyota Corolla. Speed: 60 km/h. Engine: ON."

myCar.turnOff();
// Expected output: "Engine of Toyota Corolla is OFF."

myCar.displayStatus();
// Expected output: "Car: 2022 Toyota Corolla. Speed: 0 km/h. Engine: OFF."

class Motorcycle extends Car {
  constructor(make, model, year, engineCapacity) {
    super(make, model, year);
    this.engineCapacity = engineCapacity;
  }

  doWheelie() {
    if (this.isEngineOn && this.speed > 20) {
       console.log('speed:', this.speed)
      return console.log(
        `Doing a sick wheelie on the ${this.make} ${this.model}!`
      );
     
    } else return console.log("Cannot do a wheelie now.");
  }

  displayStatus(){
    super.displayStatus()
    console.log(`Engine Capacity: ${this.engineCapacity}cc`);
  }
}

const myMotorcycle = new Motorcycle("Ducati", "Panigale", 2023, 1103);

myMotorcycle.turnOn();
myMotorcycle.accelerate(50);
myMotorcycle.displayStatus();

myMotorcycle.doWheelie();

myMotorcycle.brake(40);
myMotorcycle.doWheelie();

