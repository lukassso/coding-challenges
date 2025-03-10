// define a class
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
    // use an 'if' statement to check whether either of these conditions is met:
    // The 'messageMap' does not contain a 'message'.
    // The 'timestamp' is greter or equal to at least 10 seconds have passed since the last log
    if (
      !this.messageMap.has(message) ||
      timestamp >= this.messageMap.get(message)! + 10
    ) {
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
