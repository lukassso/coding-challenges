// Fetches data from the primary, reliable database.
const fetchPrimaryData = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe", status: "active" });
    }, 500);
  });
};

// Fetches data from a legacy system, which may fail.
const fetchLegacyData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ legacyId: `LGC-${userId}`, lastLogin: "2024-01-10" });
      } else {
        reject("Legacy system timeout.");
      }
    }, 800);
  });
};

// Fetches data from a marketing API, which is currently down.
const fetchMarketingData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Marketing API is offline.");
    }, 300);
  });
};

const fetchAllDataSources = async (userId) => {
  const promises = [
    fetchPrimaryData(userId),
    fetchLegacyData(userId),
    fetchMarketingData(userId),
  ];

  const results = await Promise.allSettled(promises);

  const dataChunks = results
    .filter((result) => {
      return result.status === "fulfilled";
    })
    .map((res) => res.value);

  const mergedData = dataChunks.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  const errorsData = results
    .filter((result) => result.status === "rejected")
    .map((error) => error.reason);

  return {
    data: mergedData,
    errors: errorsData,
  };
};

const combinedData = await fetchAllDataSources(1);
console.log(combinedData);
