// Exicution contex in js
// Execution context is the environment in which JavaScript code is executed. It consists of the scope chain, variable object, and this keyword.

// suppose we have a web page : in that page we have: {} // the window object, Global exicution context and this keyword

// when we run a js code in the browser, it creates a global execution context, which consists of the following components:
// 1. Global object: In the case of a web browser, the global object is the window object.
// 2. this keyword: Refers to the global object (window object in a web browser).
// 3. Scope chain: Contains the variable object and all the parent scopes.
// 4. Variable object: Contains all the variables and functions declared in the global scope.
// 5. Outer environment: Refers to the outer execution context (null for the global execution context).
// 6. Code: The JavaScript code to be executed.

// When a function is called, a new execution context is created, which consists of the following components:
// 1. Variable object: Contains all the variables and functions declared in the function scope.
// 2. Scope chain: Contains the variable object and all the parent scopes.
// 3. this keyword: Refers to the object that called the function.
// 4. Outer environment: Refers to the outer execution context.
// 5. Code: The JavaScript code to be executed.
// The execution context stack (call stack) keeps track of the current execution context and the order in which functions are called. When a function is called, a new execution context is pushed onto the stack. When the function returns, the execution context is popped off the stack.

// {} ==> Global exicution context ==> this keyword

// We also have function exicution context

// Interview question: What is exicution context in js? and its types and how it works?
// Answer: Execution context is the environment in which JavaScript code is executed. It consists of the scope chain, variable object, and this keyword. There are three types of execution contexts in JavaScript: global execution context, function execution context, and eval execution context. When a function is called, a new execution context is created, which consists of the following components: variable object, scope chain, this keyword, outer environment, and code. The execution context stack (call stack) keeps track of the current execution context and the order in which functions are called. When a function is called, a new execution context is pushed onto the stack. When the function returns, the execution context is popped off the stack.
// Example
// function outerFunction() {
//  let i = 90;
// function innerFunction() {
// console.log(i); // Output: 90
// }
// innerFunction();
// }
// outerFunction();
// In the above example, the innerFunction has access to the variable i in the outerFunction's scope because of lexical scoping. The scope of the variable i is determined by its location in the source code, not by the location of its execution.

// lets see the exicution context in js with an example

let val1 = 10;
let val2 = 20;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result = addNum(val1, val2);
let anoherResult = addNum(30, 40);

// Note: If you can make other understand how javascript works and exicutes the code then you can easily crack the interview.

// here are the steps of how this code will be exicuted in js

// 1. Global exicution context is created in this // this is the window object

// 2. Memory is allocated for the variables and functions in the global scope
// // In our case: val1, val2, addNum, result, anotherResult all variables will hold the undefined value and addNum will hold the reference to the function

// 3. Exicution phase: Here the code is exicuted line by line
// in our case: val1 = 10, val2 = 20
// addNum function is created and stored in the memory which creates a new exicution context which has its own new variable environment and exicution thread
// every time a function is called a new exicution context is created and stored in the memory which has its own new variable environment and exicution thread.

// note: javascript provides a exicution thread for every function call, so that the exicution of the code will not be blocked, thread because js is single threaded language

//that means that it also has its own memory space for variables and functions and gone through the same process as the global exicution context ( repeate the same steps ).
// 3.1
//memory phase: memory is allocated for the variables and functions in the addNum function scope
// // In our case: num1, num2, total all variables will hold the undefined value

// 3.2
// Exicution context:  addNum function is called with the arguments val1 and val2 and the total is calculated and returned and stored in the result variable , the total will be return to the global exicution context and stored in the result variable

// 3.3
// memory deallocation: after the addNum function exicution context is removed from the memory

// 4.
// addNum function is called with the arguments 30 and 40 and the total is calculated and returned and stored in the anotherResult variable , the total will be return to the global exicution context and stored in the anotherResult variable ( same steps will be repeated as above in step 3.1, 3.2, 3.3)

//============================================                 The call stack                   ========================================================

// The call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.

// The call stack is a stack data structure that stores information about the active subroutines of a computer program. When a subroutine is called, the information about the current state of the subroutine is pushed onto the stack. When the subroutine returns, the information is popped off the stack, and the program resumes execution at the point where it left off.

// The call stack is used to keep track of the current state of the program, including the current function being executed, the values of the local variables, and the return address of the function. When a function is called, a new stack frame is created and pushed onto the call stack. When the function returns, the stack frame is popped off the call stack, and the program resumes execution at the return address.

// The call stack is a last-in, first-out (LIFO) data structure, which means that the last function called is the first function to return. This is because the call stack is used to keep track of the current state of the program, and when a function returns, the call stack is popped to the previous state.
