// Example of Function Overloading in TypeScript

// Function Overload Signatures
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

// Implementation
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else if (typeof a === "number" && typeof b === "string") {
    return String(a) + b;
  } else {
    return a + String(b);
  }
}

// Usage Examples
console.log(add(5, 10));           // Output: 15 (number)
console.log(add("Hello", "World")); // Output: HelloWorld (string)
console.log(add(5, "px"));         // Output: 5px (string)
console.log(add("Value: ", 42));   // Output: Value: 42 (string)

// ---------------------------------------------------

// Another Example: Overloaded Function with Different Parameter Counts
function greet(name: string): string;
function greet(firstName: string, lastName: string): string;

function greet(firstName: string, lastName?: string): string {
  if (lastName) {
    return `Hello, ${firstName} ${lastName}!`;
  } else {
    return `Hello, ${firstName}!`;
  }
}

// Usage
console.log(greet("Alice"));           // Output: Hello, Alice!
console.log(greet("John", "Doe"));     // Output: Hello, John Doe!

// ---------------------------------------------------

// Advanced Example: Overload with Different Return Types
function process(value: string): string;
function process(value: number): number;
function process(value: boolean): boolean;

function process(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return !value;
  }
}

// Usage
console.log(process("hello"));    // Output: HELLO
console.log(process(25));         // Output: 50
console.log(process(true));       // Output: false
