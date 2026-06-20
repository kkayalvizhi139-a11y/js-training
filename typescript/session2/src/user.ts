interface User {
  readonly id: string;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "editor" | "viewer";
}

const adminUser: User = {
  id: "1",
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  role: "admin"
};

const editorUser: User = {
  id: "2",
  name: "Bob",
  email: "bob@example.com",
  role: "editor"
};

const viewerUser: User = {
  id: "3",
  name: "Charlie",
  email: "charlie@example.com",
  age: 25,
  role: "viewer"
};


/*
const invalidUser: User = {
  id: "4",
  name: "David",
  email: "david@example.com",
  role: "superuser"
};
*/


//  Error:Type '"superuser"' is not assignable to type '"admin" | "editor" | "viewer"'.



// adminUser.id = "100";


//Error: Cannot assign to 'id' because it is a read-only property.

/*
readonly is better than trusting developers because TypeScript
prevents accidental changes at compile time. This helps protect
important values such as IDs from being modified after creation.
*/