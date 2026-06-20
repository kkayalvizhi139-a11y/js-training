// Task A — Type Narrowing

function describe(value: string | number | boolean | null): string {
  if (value === null) {
    return "No value provided";
  }

  if (typeof value === "string") {
    return `String of length ${value.length}: ${value}`;
  }

  if (typeof value === "number") {
    return `Number: ${value.toFixed(2)}`;
  }

  return `Boolean: ${value}`;
}


// Task B — Using the 'in' operator

interface Cat {
  meow(): void;
}

interface Dog {
  bark(): void;
}

function makeSound(animal: Cat | Dog): void {
  if ("meow" in animal) {
    animal.meow();
  } else {
    animal.bark();
  }
}


// Task C — More narrowing

function summarise(input: string | number[] | { label: string }): string {
  if (typeof input === "string") {
    return `String: ${input}`;
  }

  if (Array.isArray(input)) {
    return `Array with ${input.length} numbers`;
  }

  return `Object label: ${input.label}`;
}


// Test examples
console.log(describe("Hello"));
console.log(describe(12.3456));
console.log(describe(true));
console.log(describe(null));

console.log(summarise("TypeScript"));
console.log(summarise([1, 2, 3, 4]));
console.log(summarise({ label: "Admin" }));


/*
Discriminated Union Example

interface Cat2 {
  kind: "cat";
  meow(): void;
}

interface Dog2 {
  kind: "dog";
  bark(): void;
}

type Animal = Cat2 | Dog2;

function makeSound2(animal: Animal): void {
  if (animal.kind === "cat") {
    animal.meow();
  } else {
    animal.bark();
  }
}

Why are discriminated unions more reliable?

Because every type has a common property (kind)
with a unique value. TypeScript can safely determine
the exact type based on that property, making the code
easier to read and less error-prone than checking for
the existence of methods using the 'in' operator.
*/