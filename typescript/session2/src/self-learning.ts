interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "editor" | "viewer";
}

// 1. Partial<T>

function updateUser(user: User, updates: Partial<User>): User {
  return {
    ...user,
    ...updates
  };
}

const user1: User = {
  id: "1",
  name: "Alice",
  email: "alice@example.com",
  role: "admin"
};

const updatedUser = updateUser(user1, {
  name: "Alice Smith"
});

console.log(updatedUser);


// 2. Pick<T, K>

type UserContact = Pick<User, "name" | "email">;

function sendWelcomeEmail(user: UserContact): void {
  console.log(`Welcome ${user.name}! Email sent to ${user.email}`);
}

sendWelcomeEmail({
  name: "Bob",
  email: "bob@example.com"
});


// 3. Omit<T, K>

type NewUser = Omit<User, "id">;

function createUser(user: NewUser): User {
  return {
    id: Math.random().toString(),
    ...user
  };
}

const newUser = createUser({
  name: "Charlie",
  email: "charlie@example.com",
  role: "viewer"
});

console.log(newUser);


// 4. Record<K, V>

type RolePermissions = Record<
  "admin" | "editor" | "viewer",
  string[]
>;

const permissions: RolePermissions = {
  admin: ["create", "read", "update", "delete"],
  editor: ["read", "update"],
  viewer: ["read"]
};

function getPermissions(
  role: "admin" | "editor" | "viewer"
): string[] {
  return permissions[role];
}

console.log(getPermissions("admin"));


// Explore Notes

/*
Partial<T>
Makes all properties optional.
Useful for updates where not every field is required.
*/

/*
Pick<T, K>
Creates a type containing only selected properties.
Useful when a function needs only part of an object.
*/

/*
Omit<T, K>
Creates a type excluding selected properties.
Useful when certain fields should not be provided by users.
*/

/*
Record<K, V>
Creates an object type where keys are K and values are V.
Useful for dictionaries and lookup tables.
*/