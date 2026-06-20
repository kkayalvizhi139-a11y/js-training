
type UserId = string;
type ProductId = string;
type Timestamp = number;

type Status = "active" | "inactive" | "pending";

type Direction = "north" | "south" | "east" | "west";


function getUserById(id: UserId): void {
  console.log(id);
}

function updateStatus(id: UserId, status: Status): void {
  console.log(id, status);
}

function move(direction: Direction, steps: number): void {
  console.log(direction, steps);
}


getUserById("user123"); 

const productId: ProductId = "product123";
getUserById(productId); 

/*
TypeScript does not catch this.
UserId is just an alias for string, so a normal string
can be passed wherever a UserId is expected.
*/

/*
Structural Typing:
TypeScript compares types based on their structure rather than
their names. Since UserId and ProductId are both aliases of string,
TypeScript treats them as interchangeable.

Limitation:
A ProductId can accidentally be passed where a UserId is expected,
and TypeScript will not report an error.
*/