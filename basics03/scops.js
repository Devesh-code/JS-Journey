// Scops in javascript
// Scops in javascript are the context in which a variable is declared. In other words, the scope determines the visibility of the variable. There are two types of scopes in javascript: local scope and global scope.

// Local scope
// A variable declared within a function has a local scope. It is only accessible within that function.
// Example

function myFunction() {
  var a = 10;
  console.log(a); // Output: 10
}
myFunction(); // Output: 10

// console.log(a); // ReferenceError: a is not defined
// In the above example, the variable a is declared within the function myFunction. Therefore, it has a local scope and is only accessible within the function.

// Global scope
// A variable declared outside a function has a global scope. It is accessible throughout the entire program.
// Example

let b = 20;
function myanotherFunction() {
  console.log(b); // Output: 20
}
myanotherFunction(); // Output: 20
console.log(b); // Output: 20

// In the above example, the variable b is declared outside the function myanotherFunction. Therefore, it has a global scope and is accessible throughout the entire program.

// Block scope
// A variable declared within a block of code (e.g., if statement, for loop) has a block scope. It is only accessible within that block of code.
// Example

if (true) {
  let c = 30;
  var d = 40;
  console.log(c, d); // Output: 30 40
}

// console.log(c); // ReferenceError: c is not defined
// console.log(d); // Output: 40 // this is not sposes to happen and that is why we use let and const instead of var
// In the above example, the variable c is declared within the if statement block. Therefore, it has a block scope and is only accessible within that block of code. The variable d is declared with the var keyword, which has a function scope, so it is accessible outside the block.
// Note: It is recommended to use let and const instead of var to avoid issues related to block scope and hoisting.

// hoisting

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use a variable or function before it has been declared.
// Example

console.log(e); // Output: undefined
var e = 50;

// In the above example, the variable e is declared after the console.log statement, but it still works because of hoisting. The variable e is hoisted to the top of its containing scope before code execution, so it is accessible throughout the entire program.
// Note: Hoisting only applies to variable declarations (var) and function declarations, not variable initializations (e.g., let, const) or function expressions.
// Example

//console.log(f); // ReferenceError: f is not defined
let f = 60;

// In the above example, the variable f is declared using let, which does not hoist the variable declaration to the top of the scope. Therefore, trying to access the variable before it is declared results in a ReferenceError.

// Another example with function hoisting

console.log(addon(1)); // Output: 2 // this is because the function is hoisted to the top of the scope
function addon(num) {
  return num + 1;
}

console.log(avalue(1)); // ReferenceError: Cannot access 'avalue' before initialization
// because the function is declared using const or let and const & let does not hoist the function to the top of the scope
let avalue = function addTwo(num) {
  return num + 2;
};

// Nested scopes
// Nested scopes occur when a function is defined within another function. The inner function has access to variables in the outer function's scope.
// Example

function outerFunction() {
  let g = 70;
  function innerFunction() {
    console.log(g); // Output: 70
  }
  innerFunction();
}
outerFunction();

// In the above example, the innerFunction is defined within the outerFunction, creating a nested scope. The innerFunction has access to the variable g in the outerFunction's scope.
// Note: The inner function can access variables from the outer function's scope, but the outer function cannot access variables from the inner function's scope.
// Example

function outerFunction() {
  function innerFunction() {
    let h = 80;
    return h;
  }
  return innerFunction();
  // console.log(h); // ReferenceError: h is not defined
}
outerFunction();

// In the above example, the variable h is declared within the innerFunction's scope, so it is not accessible in the outerFunction's scope.
// Nested scopes are commonly used in JavaScript to create closures, which are functions that have access to variables from their containing scope even after the outer function has finished executing.
// we use closures to create private variables and functions in JavaScript.
// Example

function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

// In the above example, the counter function returns an inner function that has access to the count variable in the outer function's scope. The inner function increments the count variable each time it is called, creating a counter that persists across multiple function calls.

// Summary
// Scopes in JavaScript determine the visibility of variables.

// there is another thing called lexical scoping which is the way how the scope is determined in javascript
// Lexical scoping
// Lexical scoping is a way to resolve variables in nested functions based on the scope in which they are defined. In other words, the scope of a variable is determined by its location in the source code, not by the location of its execution.
// Example

function outerFunction() {
  let i = 90;
  function innerFunction() {
    console.log(i); // Output: 90
  }
  innerFunction();
}

outerFunction();

// In the above example, the innerFunction has access to the variable i in the outerFunction's scope because of lexical scoping. The scope of the variable i is determined by its location in the source code, not by the location of its execution.
// Lexical scoping allows nested functions to access variables from their containing scope, even if the outer function has finished executing.

// There is thing called call stack in javascript
// Call stack
// The call stack is a mechanism used by JavaScript to keep track of function calls in a program. It is a data structure that stores information about the active subroutines of a program, including the function calls, local variables, and return addresses.
// When a function is called, a new frame is pushed onto the call stack to store information about the function call. When the function returns, the frame is popped off the call stack, and the program continues with the next function call.
// Example
//
function firstFunction() {
  console.log("First function");
  secondFunction(); // Call secondFunction
}
function secondFunction() {
  console.log("Second function");
}
firstFunction(); // Output: First function Second function

// In the above example, the firstFunction calls the secondFunction, which pushes a new frame onto the call stack. When the secondFunction returns, the frame is popped off the call stack, and the program continues with the next function call.
// The call stack is a key concept in understanding how JavaScript manages function calls and maintains the order of execution in a program.
// Note: The call stack has a limited size, and if it exceeds the maximum stack size, it will result in a stack overflow error.
// Example

// function recursiveFunction() {
//   recursiveFunction(); // Call itself recursively
// }
// recursiveFunction(); // RangeError: Maximum call stack size exceeded

// Oneanother thing is event loop
// Event loop
// The event loop is a mechanism used by JavaScript to handle asynchronous operations in a non-blocking way. It allows the program to continue running while waiting for asynchronous tasks to complete, such as fetching data from a server or reading a file.
// The event loop works by processing tasks in a queue, known as the task queue. When an asynchronous task completes, it is added to the task queue, and the event loop checks the queue for pending tasks to execute.
// but first I need to learn more in js for that
