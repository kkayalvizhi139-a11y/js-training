// Task A — tuple for user record: [name, age, isActive]
const userRecord: [string, number, boolean] = ["Alice", 30, true];

// Task B — TypeScript knows exact types by position
console.log(userRecord[0].toUpperCase());
console.log(userRecord[1].toFixed(2));
console.log(userRecord[2].toString());

// Task C 
// Error: Type 'number' is not assignable to type 'string'
// Error: Type 'string' is not assignable to type 'number'

// const wrongOrder: [string, number, boolean] = [30, "Alice", true];

// Task D — coordinate tuple
const coordinates: [number, number] = [19.076, 72.877];

// Try adding extra element
coordinates.push(100);