

// Example 1
let id: string | number = "A101";
id = 101;

// Example 2
function printStatus(status: "success" | "error") {
  console.log(status);
}
printStatus("success");

// Example 3
let value: number | string | boolean = true;
value = "hello";
value = 42;



function request(method: "GET" | "POST"): void {
  console.log(`Request method: ${method}`);
}

request("GET");
request("POST");




// readonly array prevents modification after creation
const numbers: readonly number[] = [1, 2, 3];

// numbers.push(4); ❌ Error
// numbers[0] = 10; ❌ Error


// Readonly  ensures data cannot be accidentally modified,making code safer and more predictable.



let text: string | null = "hello";

// text.toUpperCase(); ❌ Error under strictNullChecks
// because text might be null

if (text !== null) {
  console.log(text.toUpperCase()); 
}


// strictNullChecks forces us to handle null/undefined explicitly, preventing runtime crashes.