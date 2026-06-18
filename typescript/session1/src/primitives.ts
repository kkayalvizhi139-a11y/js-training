// Add type annotations to all of these
let username: string = "Alice";
let score: number = 42;
let isLoggedIn: boolean = true;
let middleName: null = null;
let lastSeen: undefined = undefined;

// // Reassign wrong types (for errors)
// username = 100;
// score = "ninety";
// isLoggedIn = 1;

// src/primitives.ts:9:1 - error TS2322: Type 'number' is not assignable to type 'string'.

// 9 username = 100;
//   ~~~~~~~~

// src/primitives.ts:10:1 - error TS2322: Type 'string' is not assignable to type 'number'.

// 10 score = "ninety";
//    ~~~~~

// src/primitives.ts:11:1 - error TS2322: Type 'number' is not assignable to type 'boolean'.

// 11 isLoggedIn = 1;
//    ~~~~~~~~~~
