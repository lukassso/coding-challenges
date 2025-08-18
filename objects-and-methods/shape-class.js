class Shape {
  constructor(name) {
    if (this.constructor === Shape) {
      throw new Error(
        "Abstract class 'Shape' cannot be instantiated directly."
      );
    }
    this.name = name;
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented by subclass.");
  }

  getPerimeter() {
    throw new Error("Method 'getPerimeter()' must be implemented by subclass.");
  }

  displayInfo() {
    return console.log(
      `Shape: ${
        this.name
      }, Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`
    );
  }

  static describe() {
    console.log("This is a utility for geometric shapes.");
  }
}

class Circle extends Shape {
  #radius;
  constructor(radius) {
    super("Circle");
    this.#radius = radius;
  }

  getArea() {
    // Correct formula: π * r^2
    return Math.PI * this.#radius ** 2;
  }

  getPerimeter() {
    // Correct formula: 2 * π * r
    return 2 * Math.PI * this.#radius;
  }
}

class Rectangle extends Shape {
  #width;
  #height;

  constructor(width, height) {
    super("Rectangle");
    this.#height = height;
    this.#width = width;
  }

  getArea() {
    return this.#height * this.#width;
  }

  getPerimeter() {
    return 2 * (this.#height * this.#width);
  }
}

// Static method call
Shape.describe();

const circle = new Circle(10);
const rectangle = new Rectangle(5, 10);

const shapes = [circle, rectangle];

shapes.forEach((shape) => {
  shape.displayInfo();
  console.log("---");
});

// Try to create an instance of the "abstract" class (should fail if methods are called)
try {
  const genericShape = new Shape("Generic");
  genericShape.getArea();
} catch (error) {
  console.error(error.message);
}
