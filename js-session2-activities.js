// Activity 1 - Async Behaviour

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

// "3" logs before "2" because setTimeout is asynchronous.
// JavaScript does not wait for the timer to finish. It continues executing the next line immediately.
// After 1 second, the callback function is moved to the call stack and "2" is printed.

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

/* Even with 0ms, setTimeout is placed in the callback queue.
JavaScript finishes the current code first, so "3" logs before "2". */

console.log("Fetching data...");

setTimeout(() => {
  console.log("Data received!");
}, 2000);

/* setTimeout waits 2 seconds before running the callback function. */
// Activity 2 - Promises

const getData = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;

  setTimeout(() => {
    if (success) {
      resolve("Data loaded!");
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

getData
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

/* .then() runs when the Promise is resolved.
   .catch() runs when the Promise is rejected. */

   const startValue = new Promise((resolve) => {
  resolve(5);
});

startValue
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 10;
  })
  .then((result) => {
    console.log(result);
  });

/* Each .then() receives the value returned by the previous .then().
   This is called Promise chaining. */


   const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("User loaded"), 1000)
);

const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Orders loaded"), 1500)
);

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });

/* Promise.all waits for all promises to resolve.
   The results are returned as an array in the same order. */

//  Activity 3 — async / await

const getUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    const user = await response.json();

    console.log(user.name);
  } catch (error) {
    console.log(error);
  }
};

getUser();

/* await pauses execution until the Promise resolves.
   try/catch handles any errors that occur during the fetch. */

const getUserById = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    return {
      name: user.name,
      email: user.email
    };
  } catch (error) {
    console.log(error);
  }
};

getUserById(3).then((result) => {
  console.log(result);
});

/* The function fetches a user, converts the response to JSON,
   and returns only the name and email fields. */

const getAllUsers = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    return users.map((user) => ({
      name: user.name,
      email: user.email
    }));
  } catch (error) {
    console.log(error);
  }
};

getAllUsers().then((result) => {
  console.log(result);
});

/* map() creates a new array containing only the name and email
   from each user object. */

// Activity 4 — Error Handling

const fetchUser = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Caught:", error.message);
  }
};

fetchUser();

/* try/catch prevents the program from crashing if an error occurs. */

const fetchMissing = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/99999"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Caught:", error.message);
  }
};

fetchMissing();

/* fetch() does not reject on 404.
   response.ok must be checked manually. */

Promise.allSettled([
  fetch("https://jsonplaceholder.typicode.com/users/1"),

  fetch("https://invalidwebsite12345.com")
]).then((results) => {
  console.log(results);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Request ${index + 1} succeeded`);
    } else {
      console.log(`Request ${index + 1} failed`);
    }
  });
});

/* Promise.allSettled waits for all promises to finish.
   It reports both successes and failures. */
   
 // Activity 5 — DOM: Select & Update

// 1. Change title text

const title = document.getElementById("title");

title.textContent = "Hello, Intern!";

/* textContent updates the text inside an element. */


// 2. Change subtitle colour

const subtitle = document.getElementById("subtitle");

subtitle.style.color = "blue";

/* style.color changes the text colour using JavaScript. */


// 3. Increment counter

const counter = document.getElementById("counter");

const currentValue = Number(counter.textContent);

counter.textContent = currentValue + 1;

/* Number() converts text to a number before adding 1. */


// 4. Render list of names

const names = ["Alice", "Bob", "Carol"];

const userList = document.getElementById("user-list");

userList.innerHTML = names
  .map(name => `<li>${name}</li>`)
  .join("");

/* map() creates li elements for each name.
   join("") combines them into one HTML string. */

   function toggleTitleStyle() {
  title.classList.toggle("highlight");
}

/* classList.toggle() adds the class if missing,
   and removes it if already present. */

toggleTitleStyle();
// Select elements

const greetBtn = document.getElementById("greet-btn");
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");

const nameInput = document.getElementById("name-input");

const greeting = document.getElementById("greeting");
const clickCount = document.getElementById("click-count");


// Task 1 - Greet Button

greetBtn.addEventListener("click", () => {
  const name = nameInput.value;

  if (name === "") {
    greeting.textContent = "Please enter a name";
  } else {
    greeting.textContent = `Hello, ${name}!`;
  }
});

/* When the button is clicked, read the input value.
   If empty, show an error message.
   Otherwise show a greeting. */


// Task 2 - Click Counter

let count = 0;

addBtn.addEventListener("click", () => {
  count++;

  clickCount.textContent = `Clicks: ${count}`;
});

resetBtn.addEventListener("click", () => {
  count = 0;

  clickCount.textContent = `Clicks: ${count}`;
});

/* Add +1 increases the count.
   Reset sets the count back to 0. */


// Task 3 - Live Input

nameInput.addEventListener("input", () => {
  const name = nameInput.value;

  if (name === "") {
    greeting.textContent = "";
  } else {
    greeting.textContent = `Hello, ${name}!`;
  }
});

/* The input event runs every time the user types.
   Greeting updates instantly. */


// Task 4 - Press Enter

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    greetBtn.click();
  }
});

/* When Enter is pressed, it triggers the same action
   as clicking the Greet button. */


// Select elements

const loadBtn = document.getElementById("load-btn");
const statusText = document.getElementById("status");
const usersContainer = document.getElementById("users-container");
const searchInput = document.getElementById("search");

let allUsers = [];

/* allUsers stores fetched users so search can work
   without making another API request. */


// Function to render users

const renderUsers = (users) => {
  usersContainer.innerHTML = users
    .map(
      (user) => `
      <div>
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>City: ${user.address.city}</p>
      </div>
      <hr>
    `
    )
    .join("");
};

/* renderUsers creates HTML for each user and
   displays it inside usersContainer. */


// Load Users Button

loadBtn.addEventListener("click", async () => {
  try {
    statusText.textContent = "Loading...";

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    allUsers = users;

    renderUsers(users);

    statusText.textContent = `${users.length} users loaded`;
  } catch (error) {
    statusText.textContent =
      "Failed to load users. Try again.";

    usersContainer.innerHTML = "";

    console.log(error);
  }
});

/* When clicked:
   1. Show Loading...
   2. Fetch users
   3. Render users
   4. Show number of loaded users */
   

// Search Users

searchInput.addEventListener("input", () => {
  const searchText =
    searchInput.value.toLowerCase();

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchText)
  );

  renderUsers(filteredUsers);
});

/* Filters already loaded users in real time.
   No additional API requests are made. */
// Activity 8.1 - Multiple Requests

const getUserAndPosts = async () => {
  try {
    const [userResponse, postsResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    ]);

    const user = await userResponse.json();
    const posts = await postsResponse.json();

    console.log(`${user.name} has ${posts.length} posts`);
  } catch (error) {
    console.log(error);
  }
};

getUserAndPosts();

/* Promise.all runs multiple promises at the same time.
   It waits until all promises are completed. */
   // Activity 8.2 - createElement

const names = ["Alice", "Bob", "Carol"];

const list = document.createElement("ul");

names.forEach((name) => {
  const item = document.createElement("li");
  item.textContent = name;
  list.appendChild(item);
});

document.body.appendChild(list);

/* createElement creates new HTML elements.
   appendChild adds them to the page. */

   // Activity 8.3 - localStorage

const sampleUsers = [
  { name: "Alice" },
  { name: "Bob" }
];

localStorage.setItem(
  "users",
  JSON.stringify(sampleUsers)
);

const savedUsers = JSON.parse(
  localStorage.getItem("users")
);

console.log(savedUsers);

/* localStorage stores data in the browser.
   Data remains even after page refresh. */

   // Activity 8.4 - AbortController

let controller;

document
  .getElementById("load-btn")
  .addEventListener("click", async () => {
    controller = new AbortController();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          signal: controller.signal
        }
      );

      const users = await response.json();

      console.log(users);
    } catch (error) {
      console.log("Fetch cancelled");
    }
  });

document
  .getElementById("cancel-btn")
  .addEventListener("click", () => {
    if (controller) {
      controller.abort();
    }
  });

/* AbortController allows a fetch request
   to be cancelled before it finishes. */