// Data Structure: Hash Map
// Algorithm: Sliding Window (Time-Based Filtering)
// Concept:
// - we maintain a sliding window of 10 seconds to track messages
// - If a message appears within the 10 sec window, we reject it (false)
// - If a message is outside the window, we log it (true) and update the timestamp

// we define a class
class Logger {
  // declare a property which is a Map object
  private messageMap: Map<string, number>;
  // define a constructor
  constructor() {
    // initialize a property as a new instance
    this.messageMap = new Map();
  }
  // define a method which takes two parameters: timestamp (a number), message (a string). The method returns a boolean value
  shouldPrintMessage(timestamp: number, message: string): boolean {
    // define variable and initialize it to the value retrieved from messageMap
    const lastTimeStamp = this.messageMap.get(message);
    // use an 'if' statement to check whether either of these conditions is met:
    // The 'messageMap' does not contain a 'message'.
    // The 'timestamp' is greater or equal to at least 10 seconds have passed since the last log
    if (!lastTimeStamp || timestamp >= lastTimeStamp + 10) {
      // if the condition is true we:
      // update 'messageMap' by setting 'message' as a key and 'timestamp' as a value
      // return 'true', allowing the message to be logged
      this.messageMap.set(message, timestamp);
      return true;
    }
    // if the condition is false we return false preventing the message from being logged again too soon
    return false;
  }
}
