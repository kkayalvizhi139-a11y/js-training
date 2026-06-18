
function logEvent(event: string): void {
  console.log(`[LOG] ${event}`);
}

const result = logEvent("user_login");

// result is of type void, so it is undefined at runtime
console.log(result);


function fail(message: string): never {
  throw new Error(message);
}

// never means this function NEVER returns a value. it either throws an error or runs forever



// function doSomething(): void {
//   return "hello"; 
// }


// Type 'string' is not assignable to type 'void'. Because void means the function should not return any value



function infiniteLoop(): never {
  while (true) {
    console.log("running...");
  }
}

// Why this is 'never':
// Because the function never finishes execution, it never reaches a return statement.