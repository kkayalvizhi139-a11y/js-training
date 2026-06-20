// Function 1
function getFirstWord(sentence: string | null): string {
  if (sentence === null) {
    return "";
  }

  const words = sentence.split(" ");

  if (words.length === 0) {
    return "";
  }

  return words[0] ?? "";
}

/*
Runtime issue if not fixed:
If sentence is null, calling split()
would throw "Cannot read properties of null".
With noUncheckedIndexedAccess enabled,
words[0] can also be undefined.
*/


// Function 2
function getUserAge(user: { name: string; age?: number }): string {
  if (user.age === undefined) {
    return `${user.name} age not provided`;
  }

  return `${user.name} is ${user.age.toString()} years old`;
}

/*
Runtime issue if not fixed:
If age is undefined, calling toString()
would throw "Cannot read properties of undefined".
*/


// Function 3
const config = {
  database: {
    host: "localhost",
    port: 5432
  }
};

function getDbPort(): number {
  return config.database.port;
}

/*
No runtime issue here because database and port
always exist in the config object.
*/


// Function 4
const users = ["Alice", "Bob", "Charlie"];

function findUser(name: string): string {
  const found = users.find((u) => u === name);

  if (found === undefined) {
    return "User not found";
  }

  return found.toUpperCase();
}

/*
Runtime issue if not fixed:
Array.find() can return undefined if no user matches.
Calling toUpperCase() on undefined would throw:
"Cannot read properties of undefined".
*/