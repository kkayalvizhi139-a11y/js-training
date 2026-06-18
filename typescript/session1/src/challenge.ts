// Challenge 1
function calculateDiscount(price: number, discountPercent?: number): number {
  if (discountPercent === undefined) {
    return price;
  }

  if (discountPercent >= 100) {
    throw new Error("Discount cannot be 100% or more");
  }

  return price - (price * discountPercent) / 100;
}


// Challenge 2
function formatUserList(users: [string, number][]): string[] {
  return users.map(([name, age]) => {
    return `${name} (${age} years)`;
  });
}


// Challenge 3
function findFirst(arr: string[], search: string): string | undefined {
  return arr.find(item => item === search);
}