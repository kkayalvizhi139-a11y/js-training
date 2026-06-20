// Task A
type Identifiable = {
  readonly id: string;
};

type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type SoftDeletable = {
  deletedAt?: Date;
  isDeleted: boolean;
};

// Task B
type BaseRecord = Identifiable & Timestamped;

type UserRecord = BaseRecord & {
  name: string;
  email: string;
};

type AuditedUserRecord = UserRecord & SoftDeletable;

// Task C
function isDeleted(record: SoftDeletable): boolean {
  return record.isDeleted;
}

// Task D
const baseRecord: BaseRecord = {
  id: "1",
  createdAt: new Date(),
  updatedAt: new Date()
};

const userRecord: UserRecord = {
  id: "2",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "Alice",
  email: "alice@example.com"
};

const auditedUser: AuditedUserRecord = {
  id: "3",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "Bob",
  email: "bob@example.com",
  isDeleted: false
};

console.log(isDeleted(auditedUser));

/*
Explore:

type A = { value: string };
type B = { value: number };
type C = A & B;

The type of C['value'] becomes 'never'.

This happens because a value cannot be both
string and number at the same time.

Therefore, it is impossible to create a valid
object of type C.
*/