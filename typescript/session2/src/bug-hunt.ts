interface Product {
  id: string;
  name: string;
  price: number;
  tags: string[];
  discount?: number;
}

// Bug 1
function applyDiscount(product: Product): number {
  return product.price - (product.discount ?? 0);
}

/*
Runtime issue:
If discount is undefined,
price - undefined results in NaN (Not a Number).
The calculation becomes invalid.
*/


// Bug 2
function getTagSummary(product: Product): string {
  return product.tags.join(", ").toUpperCase();
}

/*
Runtime issue:
toUppercase() does not exist on strings.
JavaScript would throw:
"TypeError: product.tags.join(...).toUppercase is not a function"
*/


// Bug 3
function createProduct(name: string, price: number): Product {
  return {
    id: Math.random().toString(),
    name,
    price,
    tags: []
  };
}

/*
Runtime issue:
Without parameter types, someone could call:

createProduct("Laptop", "50000")

and price would become a string instead of a number,
causing incorrect calculations elsewhere in the application.
*/


// Bug 4
function findCheapest(products: Product[]): Product | undefined {
  const sorted = [...products].sort((a, b) => a.price - b.price);
  return sorted[0];
}

/*
Runtime issue:
If products is an empty array,
sorted[0] will be undefined.

Later code expecting a Product might fail with:
"Cannot read properties of undefined"
*/
 

// Bug 5
function printProduct(product: Product): void {
  console.log(`${product.name} costs ${product.price}`);
}

/*
Runtime issue:
No direct runtime error occurs here.

The bug is a design mistake:
the function is supposed to return nothing (void),
but it returns a string. This can confuse developers
and lead to incorrect usage of the function.
*/


// Test Data
const laptop: Product = {
  id: "1",
  name: "Laptop",
  price: 50000,
  tags: ["electronics", "computer"]
};

console.log(applyDiscount(laptop));
console.log(getTagSummary(laptop));
console.log(createProduct("Phone", 20000));
console.log(findCheapest([laptop]));
printProduct(laptop);



/*
Task 3.4 Observation:

I added three deliberate type errors and ran:

npm run typecheck

TypeScript displayed all errors before the code ran.
I fixed the errors one at a time and ran the command after each fix.
When all errors were fixed, the command completed with no output.

The "typecheck" script is useful during development,
before committing code, before pushing to GitHub,
and in CI/CD pipelines to catch type errors early.
*/