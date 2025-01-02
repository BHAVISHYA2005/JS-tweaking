// Basic async function
async function myAsyncFunction() {
    return "Hello from async function!";
  }
  
  myAsyncFunction().then(result => console.log(result));
  
  async function myAsyncFunction2() {
      return Promise.resolve("Hello from async function 2")
  }
  
  myAsyncFunction2().then(result => console.log(result));
  
  // Using await
  function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000);
    });
  }
  
  async function processData() {
    console.log("Starting data processing...");
    const data = await fetchData();
    console.log(data);
    console.log("Data processing complete.");
  }
  
  processData();
  
  // Handling errors with try...catch
  async function fetchDataWithError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error fetching data!");
      }, 1000);
    });
  }
  
  async function processDataWithError() {
    try {
      const data = await fetchDataWithError();
      console.log(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  processDataWithError();
  
  // Example with multiple await calls
  function getUser() {
    return new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "John" }), 500));
  }
  
  function getPosts(userId) {
    return new Promise(resolve => setTimeout(() => resolve(["Post 1", "Post 2"]), 500));
  }
  
  async function displayUserAndPosts() {
    try {
      const user = await getUser();
      console.log("User:", user);
  
      const posts = await getPosts(user.id);
      console.log("Posts:", posts);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  displayUserAndPosts();
  
  // Practical Example: Fetching Data from an API
  async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }
  
  async function displayUser(userId) {
      const user = await fetchUserData(userId)
      if (user) {
          console.log("User Data", user)
      }
  }
  
  displayUser(1);
  
  
  //Example showing how to handle multiple promises simultaneously using Promise.all
  async function getAllUserData() {
      try {
          const user1 = fetchUserData(1);
          const user2 = fetchUserData(2);
          const user3 = fetchUserData(3);
  
          const allUsers = await Promise.all([user1, user2, user3])
  
          console.log("All User Data", allUsers)
      } catch (error) {
          console.log("error", error)
      }
  }
  
  getAllUserData()