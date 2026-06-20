
// Using interface because it describes an object shape  and can be extended later.

interface PaginationResponse<T> {
  page: number;
  pageSize: number;
  total: number;
  data: T[];
}


const users: PaginationResponse<string> = {
  page: 1,
  pageSize: 10,
  total: 100,
  data: ["Alice", "Bob"]
};


// 2. A type that can be either a string or an array of strings
// Using type because unions can only be created with type aliases.

type StringOrStringArray = string | string[];

const value1: StringOrStringArray = "hello";
const value2: StringOrStringArray = ["hello", "world"];


// 3. A shape for a notification that can be extended by other types
// Using interface because it is intended to be extended.

interface Notification {
  id: string;
  message: string;
}

interface EmailNotification extends Notification {
  email: string;
}

interface PushNotification extends Notification {
  deviceId: string;
}


// 4. A type alias for a callback that processes a number and returns void
// Using type because function signatures are commonly represented with type aliases.

type NumberProcessor = (value: number) => void;

const processNumber: NumberProcessor = (value) => {
  console.log(value);
};


// 5. A union of allowed HTTP methods
// Using type because unions require type aliases.

type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH";

const method: HttpMethod = "GET";