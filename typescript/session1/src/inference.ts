// Inferred — TypeScript automatically detects types
let city = "Mumbai";
let year = 2024;

// Explicit — we define types because no initial value
let country: string;
let population: number;

country = "India";
population = 1400000000;

// Mystery variable (no type + no value initially)
let mystery;

mystery = "hello";
mystery = 42; 
// TypeScript infers types automatically when values are assigned.
// If no value is given, the type becomes 'any', which disables type safety.