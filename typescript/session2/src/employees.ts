interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

interface Employee extends Person {
  readonly employeeId: string;
  department: string;
  startDate: Date;
}

interface Manager extends Employee {
  teamSize: number;
  directReports: string[];
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

function introduceEmployee(employee: Employee): string {
  return `Hi, I am ${getFullName(employee)} from ${
    employee.department
  }, joined on ${employee.startDate.toLocaleDateString()}`;
}

const person: Person = {
  firstName: "Alice",
  lastName: "Johnson",
  email: "alice@example.com"
};

const employee: Employee = {
  employeeId: "EMP001",
  firstName: "Bob",
  lastName: "Smith",
  email: "bob@example.com",
  department: "Engineering",
  startDate: new Date("2024-01-01")
};

const manager: Manager = {
  employeeId: "MGR001",
  firstName: "Charlie",
  lastName: "Brown",
  email: "charlie@example.com",
  department: "Engineering",
  startDate: new Date("2023-01-01"),
  teamSize: 5,
  directReports: ["EMP001", "EMP002"]
};

console.log(getFullName(person));
console.log(getFullName(employee));
console.log(getFullName(manager));

console.log(introduceEmployee(employee));
console.log(introduceEmployee(manager));

/*
getFullName accepts Person, Employee, and Manager because
Employee extends Person and Manager extends Employee.
They all contain the properties required by Person,
so TypeScript allows them to be used wherever a Person is expected.
*/