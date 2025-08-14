const fetchUserData = (userId) => {
  console.log("1. Pobieranie danych użytkownika...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { id: 1, name: "Jan Kowalski" },
        2: { id: 2, name: "Anna Nowak" },
      };
      const user = users[userId];
      if (user) {
        console.log("   -> Sukces: Użytkownik znaleziony.");
        resolve(user);
      } else {
        reject("BŁĄD: Użytkownik nie istnieje.");
      }
    }, 1000);
  });
};

const fetchUserPosts = (userId) => {
  console.log("2. Pobieranie postów użytkownika...");
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = {
        1: ["Post 1", "Post 2"],
        2: ["Post 3", "Post 4", "Post 5"],
      };
      const userPosts = posts[userId] || [];
      console.log("   -> Sukces: Posty pobrane.");
      resolve(userPosts);
    }, 1000);
  });
};

async function displayFullUserData(userId) {
  try {
    const user = await fetchUserData(userId);
    const posts = await fetchUserPosts(userId);
    console.log(`User: ${user.name} published ${posts.length}`);
  } catch (error) {
    console.error(error, `User with id ${error} not found`);
  }
}

displayFullUserData(1);
// displayFullUserData(99);
