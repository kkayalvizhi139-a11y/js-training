
// Part A — any 


let dangerousValue: any = "hello";
dangerousValue = 42;
dangerousValue = { name: "Alice" };

console.log(dangerousValue.foo.bar); 


// Part B — unknown (safe)


let safeValue: unknown = "hello";

//  TypeScript error (because we don't know the type)
// console.log(safeValue.toUpperCase());


if (typeof safeValue === "string") {
  console.log(safeValue.toUpperCase());
}

// Type narrowing is the process of refining a broad type (like unknown) into a specific type using checks like typeof, instanceof, or conditions.
// It allows TypeScript to safely allow operations on variables.