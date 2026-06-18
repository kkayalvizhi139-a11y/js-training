type User = { fullName: string };

function getUserLabel(user: User): string {
  return user.fullName.toUpperCase(); 
}
// In JavaScript, the bug is found at runtime when the code crashes.
// In TypeScript, the bug is found at compile time before execution,
// preventing runtime errors.