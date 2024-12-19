# Type Coercion Bug in TypeScript

This repository demonstrates a common issue in TypeScript where type coercion can lead to unexpected runtime errors.  The `add` function is intended to add two numbers, but due to TypeScript's type coercion, it will compile even if a string is passed. This results in a runtime error. The solution shows how stricter type checking can prevent this. 