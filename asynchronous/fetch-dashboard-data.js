const fetchUserProfile = (userId) => {
  return new Promise((resolve) => {
    // Simulate a network delay between 0.5 and 1.5 seconds
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      console.log("User profile fetched.");
      resolve({ id: userId, name: "John Doe", theme: "dark" });
    }, delay);
  });
};

const fetchUserNotifications = (userId) => {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      console.log("Notifications fetched.");
      resolve(["New message", "Upcoming task deadline"]);
    }, delay);
  });
};

const fetchUserSettings = (userId) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 1000 + 500;
    setTimeout(() => {
      // Simulate an error for every even-numbered user ID
      if (userId % 2 === 0) {
        console.log("Error fetching settings!");
        reject("Failed to load account settings.");
      } else {
        console.log("Settings fetched.");
        resolve({ language: "pl", notifications: "email" });
      }
    }, delay);
  });
};

// --- EXAMPLE USAGE ---
// fetchDashboardData(1); // Should succeed
// fetchDashboardData(2); // Should fail and be caught by 'catch'

async function fetchDashboardData(userId) {
  try {
    const promiseArray = [
      fetchUserProfile(userId),
      fetchUserNotifications(userId),
      fetchUserSettings(userId),
    ];
    const results = await Promise.all(promiseArray);
    const [profileData, notificationsData, settingsData] = results;
    console.log(
      `Panel for ${profileData.name}:You have ${notificationsData.length} ${settingsData.notifications} in ${settingsData.language}`
    );
  } catch (error) {
    console.log(error);
  }
}

fetchDashboardData(1);
