class ConfigurationManager {
  static #instance = null;
  #settings = {};
  constructor() {
    if (ConfigurationManager.#instance) {
      throw new Error(
        "Cannot create instance. Please use ConfigurationManager.getInstance()."
      );
    }
    ConfigurationManager.#instance = this;
  }

  static getInstance() {
    if (this.#instance === null) {
      new this();
    }
    return this.#instance;
  }

  set(key, value) {
    this.#settings[key] = value;
  }
  get(key) {
    return this.#settings[key];
  }
  getAll() {
    return { ...this.#settings };
  }
}

// Get the single instance of the configuration manager
const config1 = ConfigurationManager.getInstance();
const config2 = ConfigurationManager.getInstance();

// Test if both variables point to the exact same instance
console.log(
  `Are config1 and config2 the same instance? ${config1 === config2}`
);
// Expected: Are config1 and config2 the same instance? true

// Set configuration using the first variable
config1.set("apiKey", "XYZ12345");
config1.set("theme", "dark");

// Access configuration using the second variable
console.log(`API Key from config2: ${config2.get("apiKey")}`);
// Expected: API Key from config2: XYZ12345

// Try to create a new instance using 'new' (should fail)
try {
  const config3 = new ConfigurationManager();
} catch (error) {
  console.error(error.message);
  // Expected: Cannot create instance. Please use ConfigurationManager.getInstance().
}

console.log(config1.getAll());
// Expected: { apiKey: 'XYZ12345', theme: 'dark' }
