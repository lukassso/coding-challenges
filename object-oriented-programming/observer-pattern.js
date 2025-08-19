class NewsPublisher {
  #subscribers = [];
  constructor() {}
  subscribe(subscriber) {
    this.#subscribers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.#subscribers = this.#subscribers.filter(
      (existingSubscriber) => existingSubscriber !== subscriber
    );
    console.log(`Subscriber ${subscriber.name} was removed`)
  }
  #notify(news) {
    this.#subscribers.forEach((item) => item.update(news));
  }

  publishNews(news) {
    console.log(`Publisher: Publishing a new story: ${news}`);
    this.#notify(news);
  }
}

class EmailSubscriber {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`[Email to ${this.name}]: New story available: '${news}'`);
  }
}

class SMSSubscriber {
  constructor(name) {
    this.name = name;
  }
  update(news) {
    console.log(`[SMS to ${this.name}]: Breaking News: '${news}'`);
  }
}

const publisher = new NewsPublisher();

const emailSubscriber = new EmailSubscriber("John");
const smsSubscriber = new SMSSubscriber("Jane");
const anotherEmailSubscriber = new EmailSubscriber("Peter");

// Subscribe observers to the publisher
publisher.subscribe(emailSubscriber);
publisher.subscribe(smsSubscriber);
publisher.subscribe(anotherEmailSubscriber);

// Publisher publishes a new story, notifying all subscribers
console.log("--- Publishing first story ---");
publisher.publishNews("A new JavaScript feature is announced!");

// --- Expected output for the first story: ---
// Publisher: Publishing a new story: 'A new JavaScript feature is announced!'
// [Email to John]: New story available: 'A new JavaScript feature is announced!'
// [SMS to Jane]: Breaking News: 'A new JavaScript feature is announced!'
// [Email to Peter]: New story available: 'A new JavaScript feature is announced!'

// Unsubscribe one observer
publisher.unsubscribe(emailSubscriber);

// Publisher publishes another story
console.log("\n--- Publishing second story ---");
publisher.publishNews("A major sports event concluded.");

// --- Expected output for the second story: ---
// Publisher: Publishing a new story: 'A major sports event concluded.'
// [SMS to Jane]: Breaking News: 'A major sports event concluded.'
// [Email to Peter]: New story available: 'A major sports event concluded.'
