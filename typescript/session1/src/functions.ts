// // Error code

// function multiply(a, b) {
//   return a * b;
// }

// function formatName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// function isAdult(age) {
//   return age >= 18;
// }

// function getFirstElement(arr) {
//   return arr[0];
// }



function multiply(a: number, b: number): number {
  return a * b;
}


function formatName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}


function isAdult(age: number): boolean {
  return age >= 18;
}


function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}