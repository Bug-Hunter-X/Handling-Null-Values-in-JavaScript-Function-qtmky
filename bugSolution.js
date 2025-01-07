function foo(a, b) {
  //Check if parameters are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Parameters must be numbers.');
  }
  return a + b; 
}

console.log(foo(5, 5));    // Output: 10
console.log(foo(null,5)); // Throws an error
console.log(foo(5, null)); // Throws an error