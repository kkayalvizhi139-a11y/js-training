// // Task A — make 'title' optional
// function greetUser(name: string, title: string): string {
//   return title ? `Hello ${title} ${name}` : `Hello ${name}`;
// }

// greetUser("Alice");
// greetUser("Alice", "Dr.");


// // Task B — add default value for role
// function createAccount(email: string, role: string): object {
//   return { email, role };
// }

// createAccount("alice@example.com");
// createAccount("bob@example.com", "admin");



function greetUser(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

greetUser("Alice");
greetUser("Alice", "Dr.");




function createAccount(email: string, role: string = "user"): object {
  return { email, role };
}

createAccount("alice@example.com");
createAccount("bob@example.com", "admin");


// Optional parameter (name?: string) means the argument may or may not be passed. If it is not passed, its value becomes undefined, so we must handle undefined inside the function.

// Default parameter (name: string = "Guest") means the parameter always has a value. If the argument is not passed, TypeScript automatically assigns the default value ("Guest").


// - Optional parameter → value can be undefined where  Default parameter → always has a concrete value

// When to use:
// Use optional parameter when the value is truly optional and may not always be needed and Use default parameter when you want a safe fallback value so the function always behaves consistently.