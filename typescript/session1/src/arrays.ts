// Task A — annotated arrays
const fruits: string[] = ["apple", "banana", "cherry"];
const temperatures: number[] = [22.5, 19.0, 30.1];
const flags: boolean[] = [true, false, true];

// Task B — wrong types (these will cause errors)
// fruits.push(42); // Argument of type 'number' is not assignable to parameter of type 'string'.

// temperatures.push("hot"); Argument of type 'string' is not assignable to parameter of type 'number'.

// Task C — mixed array using union type
const mixed: (string | number)[] = ["Alice", 1, "Bob", 2];
//mixed.push(true); // error: boolean not allowed

// (string | number)[] means array can contain ONLY strings or numbers.boolean is not allowed, so TypeScript throws an error.
// This is called a union type constraint on arrays.


// string[] and Array<string> are equivalent in TypeScript.They both mean an array of strings.
// They are interchangeable syntactic styles.

