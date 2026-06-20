interface User {
  id: string;
  name: string;
  email: string;
}

const cache: Record<string, User> = {};

function fetchUserFromCache(id: string): User | null {
  return cache[id] || null;
}

function saveUserToCache(user: User): void {
  cache[user.id] = user;
}

function processUsers<T, U>(
  users: T[],
  filterFn: (user: T) => boolean,
  transformFn: (user: T) => U
): U[] {
  return users.filter(filterFn).map(transformFn);
}

function buildQueryString(
  params: Record<string, string | number | boolean>
): string {
  return Object.keys(params)
    .map((key) => {
      return key + "=" + encodeURIComponent(String(params[key]));
    })
    .join("&");
}

function retry<T>(
  fn: () => Promise<T>,
  maxAttempts: number,
  delay: number
): Promise<T> {
  return new Promise((resolve, reject) => {
    let attempt = 0;

    function run(): void {
      attempt++;

      fn()
        .then(resolve)
        .catch((err) => {
          if (attempt >= maxAttempts) {
            reject(err);
          } else {
            setTimeout(run, delay);
          }
        });
    }

    run();
  });
}

// Test examples

const user: User = {
  id: "1",
  name: "Alice",
  email: "alice@example.com"
};

saveUserToCache(user);

console.log(fetchUserFromCache("1"));

const result = processUsers(
  [1, 2, 3, 4, 5],
  (n) => n % 2 === 0,
  (n) => n.toString()
);

console.log(result);

console.log(
  buildQueryString({
    page: 1,
    active: true,
    search: "typescript"
  })
);