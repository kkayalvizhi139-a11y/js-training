console.log("Hello");

const name = "Kayalvizhi";
let age = 20;
const role = "Intern";
let isAvailable = true;
// name = "New Name";

console.log(`name is a ${typeof name}`);
console.log(`age is a ${typeof age}`);
console.log(`role is a ${typeof role}`);
console.log(`isAvailable is a ${typeof isAvailable}`);

console.log(`Hi, I'm ${name} and I'm a ${role}.`);
console.log(`Available: ${isAvailable}`);
console.log(`My name has ${name.length} characters`);


const fullName = (first, last) => `${first} ${last}`;

console.log(fullName("Alice", "Johnson"));


const isAdult = (age) => age >= 18;

console.log(isAdult(20));
console.log(isAdult(15));


const formatUser = (user) => `${user.name} — ${user.role}`;

console.log(
  formatUser({
    name: "Alice",
    role: "dev"
  })
);

const user = {
  id: 1,
  name: "Alice",
  role: "dev",
  active: true,
  address: {
    city: "Mumbai",
    country: "India"
  }
};


const { name, role, active } = user;

console.log(name);
console.log(role);
console.log(active);


const {
  address: { city }
} = user;

console.log(city);


const updatedUser = {
  ...user,
  active: false
};

console.log(updatedUser);


const devs = ["Alice", "Carol"];
const designers = ["Bob", "Dan"];


const team = [...devs, ...designers];

console.log(team);


const updatedTeam = [...team, "Eve"];

console.log(updatedTeam);


const [firstMember, secondMember] = team;

console.log(firstMember);
console.log(secondMember);


const users = [
  { id: 1, name: "Alice", role: "dev", active: true },
  { id: 2, name: "Bob", role: "design", active: false },
  { id: 3, name: "Carol", role: "dev", active: true },
  { id: 4, name: "Dan", role: "design", active: true },
  { id: 5, name: "Eve", role: "dev", active: false },
];


const activeUsers = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeUsers);


const devUsers = users.filter(user => user.role === "dev");

console.log(devUsers);


const userDescriptions = users.map(
  user => `${user.name} is a ${user.role}`
);

console.log(userDescriptions);


const activeDevs = users
  .filter(user => user.active && user.role === "dev")
  .map(user => user.name);

console.log(activeDevs);



const roleCount = users.reduce((acc, user) => {
  acc[user.role] = (acc[user.role] || 0) + 1;
  return acc;
}, {});

console.log(roleCount);


const firstActiveDesigner = users.find(
  user => user.active && user.role === "design"
);

console.log(firstActiveDesigner);


const hasInactiveUser = users.some(
  user => !user.active
);

console.log(hasInactiveUser);


const allHaveRole = users.every(
  user => user.role
);

console.log(allHaveRole);

const input = "5";
const score = 5;

// Wrong: == compares values after type conversion
// "5" == 5 becomes true

if (input === score) {
  console.log("match");
} else {
  console.log("no match");
}




const doubled = [1, 2, 3].map(n => {
  return n * 2;
});
// Wrong: curly braces require an explicit return

console.log(doubled);

const original = [1, 2, 3];

// Wrong: push() modifies the original array

const newArray = [...original, 4];

console.log(original);
console.log(newArray);

const user = {
  name: "Alice",
  active: true
};

// Allowed: modifying object properties
user.active = false;

console.log(user);

// Not allowed: reassigning the entire object
// user = { name: "Bob" };
// When used  "Uncaught TypeError: Assignment to constant variable" error will occur.
const Username = "Alice";
const username = "Bob";

console.log(Username);
console.log(username);
// JavaScript is case-sensitive.

// Username and username are treated as two completely different variables.
const a = null;
const b = undefined;

console.log(typeof a);
console.log(typeof b);
// null means an intentional empty value.

// undefined means a value has not been assigned.

// typeof null returns "object"
// This is a historical JavaScript bug that remains for compatibility.

// typeof undefined returns "undefined".
console.log(greet("Alice"));

const greet = (name) => `Hello, ${name}`; //ReferenceError: Cannot access 'greet' before initialization

const greet = (name) => `Hello, ${name}`;

console.log(greet("Alice")); // Arrow functions stored in const variables are not hoisted like normal function declarations.
// The function must be defined before it is used.

const x = 10;
const y = 20;
// JavaScript can automatically insert semicolons, but using them consistently makes code clearer and avoids certain edge-case bugs.