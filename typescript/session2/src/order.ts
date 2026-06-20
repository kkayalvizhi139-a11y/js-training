interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface Product {
  readonly id: string;
  name: string;
  price: number;
  category: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
}

interface Order {
  readonly id: string;
  customer: string;
  items: OrderItem[];
  shippingAddress: Address;
  status: "pending" | "shipped" | "delivered";
  createdAt: Date;
}

function calculateTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

const order: Order = {
  id: "ORD001",
  customer: "Alice",
  items: [
    {
      product: {
        id: "P001",
        name: "Laptop",
        price: 50000,
        category: "Electronics"
      },
      quantity: 1
    },
    {
      product: {
        id: "P002",
        name: "Mouse",
        price: 1000,
        category: "Accessories"
      },
      quantity: 2
    }
  ],
  shippingAddress: {
    street: "12 Main Road",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "600001"
  },
  status: "pending",
  createdAt: new Date()
};

console.log(calculateTotal(order));

/*
Recursive Type Example:

interface TreeNode {
  value: string;
  children: TreeNode[];
}

A TreeNode can contain other TreeNode objects inside its
children array. This is called a recursive type because
the interface refers to itself.
*/