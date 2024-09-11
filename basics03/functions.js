// functions in js
// function is way to group code and reuse it

function greet() {
  console.log("Hello");
}

//greet();// This function exituction
greet; // this is the reference of a function, just by it's name

// function with parameters
// parameters are the variables that we define in the function definition

function someFunction(n1, n2) {
  console.log(n1 + n2);
}

//const someN = someFunction(1, 2); // 3 // here 1 and 2 are the arguments
//console.log(someN); // undefined // because we are not returning anything from the function

// function with return statement

function anotherFunction(n1, n2) {
  // we  much use condition to check if the desired arguments are provided or not
  return n1 + n2;
}

const anotherN = anotherFunction(1, 2); // 3
//console.log(anotherN); // 3

function simleLogin(username) {
  if (username === undefined) {
    // if (!username) // this will also work
    console.log("Please provide a username");
  }

  return `${username} logged in`;
}

const login = simleLogin("John");
//console.log(login); // John logged in

//console.log(simleLogin()); // Please provide a username

//console.log(simleLogin("")); // logged in

//console.log(simleLogin("Emmi")); // Emmi logged in

// rest parameters
// rest parameters are used to pass multiple arguments to a function and yes it looks like spread operator but it's not, it's rest operator when it is used in function perameters and it's spread operator when it is used in function arguments
function calculateKartPrice(price, ...quantity) {
  return `total ${price} are payable for ${quantity} `;
}

const kartPrice = calculateKartPrice(100, 2, 3, 4, 5);
//console.log(kartPrice); // total 100 are payable for 2,3,4,5

const user = {
  username: "Johan",
  totalAmount: 1999,
};

function userLogin(user) {
  return `${user.username} logged in and total amount is ${user.totalAmount}`;
}

const userLoginInfo = userLogin(user);
//console.log(userLoginInfo); // Johan logged in and total amount is 1999

const pricesArray = [200, 300, 400, 500, 600, 700, 800, 900, 1000];

function calculateTotal(...prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

const totalAmount = calculateTotal(...pricesArray);
console.log(totalAmount); // 5400

// this keyword in js
// The this keyword refers to the object it belongs to.
// It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// in an object this refers to the object itself
// in a constructor function this refers to the object that is created by the constructor function

const player = {
  name: "Johan",
  kills: 0,
  score: 0,
  scoreCard: function () {
    this.kills++;
    this.score += 100;
    return `${this.name} has ${this.kills} kills and ${this.score} score`;
  },
};

const playerScore = player.scoreCard();
console.log(playerScore); // Johan has 1 kills and 100 score
player.scoreCard();
console.log(this); // {} // the global object

// this in functions
// In a function, this refers to the global object.

function anyFunction() {
  return this;
}

const anyF = anyFunction();
//console.log(anyF); // {} // the global object

// this in strict mode
// In a function, in strict mode, this is undefined.

// what is strict mode: The "use strict" directive was new in ECMAScript version 5. which are used to catch common coding errors and "unsafe" actions. It prevents, or throws errors, when relatively "unsafe" actions are taken (such as gaining access to the global object).
// The "use strict" directive is only recognized at the beginning of a script or a function.
// If you use "use strict" in a function, the value of this will be undefined.
// that is why this is undefined in strict mode
function strictFunction() {
  "use strict";
  return this;
}

//const strictF = strictFunction();
//console.log(strictF); // undefined

// how this works in arrow functions & why we use arrow functions in js

// In arrow functions, this does not have its own value. It will always be the same as the this of the enclosing scope.

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them.
// Arrow functions do not have arguments. Use rest parameters instead.

// Arrow functions
// Arrow functions are a more concise way to write functions in JavaScript. They use a new token, =>, that looks like a fat arrow.
// Arrow functions are anonymous and change the way this binds in functions.
// Example

const avariable = (nums) => {
  //
  console.log(this); // {} // the global object // because arrow functions do not have their own this. They are not well suited for defining object methods.
  return nums * 2; // when we use curly brases we must use return keyword in arrow functions
};
let arr = [1, 2, 3, 4, 5];
console.log(avariable(2)); //

// implicit return
// Arrow functions can have either a "concise body" or the usual "block body".

const implicitReturn = (num) => num * 69;
console.log(implicitReturn(2)); // 4

// another example of implicit return
const implicitReturn2 = (num) => num * 3; // when we use peranthesis we don't need to use return keyword
console.log(implicitReturn2(2)); // 6

// when we return an object in arrow function we must use peranthesis
const implicitReturn3 = (num) => ({ num: num * 3 });
console.log(implicitReturn3(2)); // { num: 6 }

// IIFE (Immediately Invoked Function Expression)
// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
// The JavaScript engine treats the function as an expression and immediately executes it.
// Example

(function () {
  console.log("Hello World");
})(); // IIFE requires ; at the end to end the statement or function call because it's a function expression unless it will throw an error when minified or another similar operation is performed on the code.

// Why we need IIFE because it helps to avoid polluting the global scope and keep the code clean and safe
// Example
// Without IIFE
// In this example, the variable x is defined within the IIFE and cannot be accessed outside it.

var x = 10;
(function () {
  var x = 20;
  console.log(x); // 20
})();

(() => {
  console.log("Hello from unnamed iife");
})();
