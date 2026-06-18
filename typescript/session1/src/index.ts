// console.log("TypeScript is running");
// //const age: number = "thirty";
// const age: number = 30;
// // We use tsc --noEmit to check type errors without generating JavaScript files.
// // It is useful in CI/CD pipelines and during development to validate code safely.

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

