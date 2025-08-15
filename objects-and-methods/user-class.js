

// Calling a static method directly on the class
console.log(`Is '123' a valid password? ${User.isValidPassword('123')}`); // false
console.log(`Is '12345678' a valid password? ${User.isValidPassword('12345678')}`); // true

try {
  // Create a user with a valid password
  const user1 = new User('JohnDoe', 'john.doe@example.com', 'securePassword123');
  console.log('User created successfully.');

  // Try to access private field (this will cause an error)
  // console.log(user1.#email); 

  // Get public data
  console.log(user1.getPublicInfo()); // { username: 'JohnDoe', email: 'j**e@example.com' }

  // Change password
  const success = user1.changePassword('securePassword123', 'newSuperSecurePassword');
  console.log(`Password changed successfully: ${success}`); // true

  // Create a user with a short password (this will throw an error)
  const user2 = new User('JaneDoe', 'jane.doe@example.com', 'short');

} catch (error) {
  console.error(`ERROR: ${error.message}`); // ERROR: Password is too short.
}