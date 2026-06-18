// noImplicitAny demo

// function multiply(a, b) {
//   return a * b;
// }

// Correct version
function multiplySafe(a: number, b: number): number {
  return a * b;
}

// // strictNullChecks demo

//  let username: string = null;

// Correct version
let usernameSafe: string | null = null;


// noImplicitAny: prevents implicit 'any' types for function parameters
// strictNullChecks: prevents assigning null/undefined to non-nullable types
