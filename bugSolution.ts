function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = add(1, "2"); // This compiles but will fail at runtime
let result2 = addSafe(1, 2); // This is type safe
let result3 = addSafe(1, "2"); // throws an error at compile time because of the added check