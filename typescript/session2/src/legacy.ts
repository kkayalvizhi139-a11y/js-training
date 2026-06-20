interface Item {
  price: number;
  quantity: number;
}

interface User {
  firstName: string;
  lastName: string;
  title?: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
}

function calculateInvoiceTotal(items: Item[], taxRate: number): number {
  let total = 0;

  for (const item of items) {
    total += item.price * item.quantity;
  }

  const tax = total * taxRate;
  return total + tax;
}

function formatCurrency(amount: number, currencyCode: string): string {
  return currencyCode + amount.toFixed(2);
}

function getUserDisplayName(user: User): string {
  if (user.title) {
    return `${user.title} ${user.firstName} ${user.lastName}`;
  }

  return `${user.firstName} ${user.lastName}`;
}

function findProductByCategory(
  products: Product[],
  category: string
): Product[] {
  return products.filter((p) => p.category === category);
}

// Test Data

const items: Item[] = [
  { price: 100, quantity: 2 },
  { price: 50, quantity: 1 }
];

console.log(calculateInvoiceTotal(items, 0.1));

console.log(formatCurrency(123.45, "USD "));

const user: User = {
  firstName: "Alice",
  lastName: "Johnson",
  title: "Dr."
};

console.log(getUserDisplayName(user));

const products: Product[] = [
  { id: "1", name: "Laptop", category: "Electronics" },
  { id: "2", name: "Phone", category: "Electronics" },
  { id: "3", name: "Book", category: "Education" }
];

console.log(findProductByCategory(products, "Electronics"));