const mockDatabase = [
  { id: 1, name: "Jan Kowalski", email: "jan@example.com" },
  { id: 2, name: "Anna Nowak", email: "anna@example.com" },
  { id: 3, name: "Piotr Zieliński", email: "piotr@example.com" },
];

const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let arrayLength = mockDatabase.length;
      let foundUser = null;
      for (let i = 0; i < arrayLength; i++) {
        if (mockDatabase[i].id === userId) {
          foundUser = mockDatabase[i];
          break;
        }
      }
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject(`User with ID: ${userId} not found.`);
      }
    }, 1500);
  });
};

const testFetch = fetchUserData(3)
  .then((user) => console.log(user, "Success"))
  .catch((error) => console.error(error, `User with id ${error} not found`));

console.log(testFetch);
