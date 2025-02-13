function foo(a, b) {
  // Check for both null and undefined values
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null or undefined values
  }
  return a + b; // Basic addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); // Output: 0
console.log(foo(5, undefined)); // Output: 0