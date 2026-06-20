/*
Error 1:
Property 'username' does not exist on type 'User'.

Meaning:
Trying to access a property that is not defined in the User type.
*/

interface User {
  name: string;
}

const user: User = { name: "Alice" };

// Fixed code
console.log(user.name);


/*
Error 2:
Argument of type 'string' is not assignable to parameter of type 'number'.

Meaning:
A string was passed where a number was expected.
*/

function square(num: number): number {
  return num * num;
}

// Fixed code
square(5);


/*
Error 3:
Parameter 'data' implicitly has an 'any' type.

Meaning:
A function parameter has no type annotation.
*/

// Fixed code
function print(data: string): void {
  console.log(data);
}

print("Hello");


/*
Error 4:
Object is possibly 'undefined'.

Meaning:
A value may be undefined, but code tries to use it directly.
*/

const users = ["Alice", "Bob"];

const found = users.find(u => u === "John");

// Fixed code
if (found) {
  console.log(found.toUpperCase());
}


/*
Error 5:
Type 'string | undefined' is not assignable to type 'string'.

Meaning:
A variable could be undefined but is assigned to a string variable.
*/

interface UserProfile {
  name?: string;
}

const profile: UserProfile = {};

// Fixed code
const userName: string = profile.name ?? "Guest";

console.log(userName);