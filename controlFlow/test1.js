// // if else statements

// let user = {
//   username: "Johan",
//   totalAmount: 1999,
// };

// if (user.totalAmount > 1000) {
//   console.log("You are a premium user");
// } else {
//   console.log("You don't have any active subscription plan ");
// }

// // operators: ==, ===, !=, !==, >, <, >=, <=, &&, ||, !
// // == is equal to
// // === is equal value and equal type
// // != is not equal
// // !== is not equal value or not equal type
// // > is greater than
// // < is less than
// // >= is greater than or equal to
// // <= is less than or equal to
// // && is logical and
// // || is logical or
// // ! is logical not

// // short hand if else
// // if (condition) statement1 else statement2

// let balance = 1000;
// let withdrawAmount = 50;

// //if (balance >= 500) console.log("You can withdraw money");
// //else console.log("You don't have enough balance");

// // nested if else

// if (balance >= 500) {
//   if (withdrawAmount <= balance) {
//     console.log("You can withdraw money");
//   } else {
//     console.log("You don't have enough balance");
//   }
// }

// const userLogin = true;
// const haveSubscription = true;
// const logedInFromGoogle = false;
// const logedInFromEmail = true;

// if (userLogin && (logedInFromGoogle || logedInFromEmail)) {
//   console.log("You are successfully logged in");

//   if (userLogin && haveSubscription) {
//     console.log("You can watch all the movies");
//   }
// }

// switch case statements

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    //break; // if we don't use break, it will execute all the cases after the matching case except default case, This is called fall-through behavior in switch case
    break;

  case "Tuesday":
    console.log("Today is Tuesday");
    break;

  case "Wednesday":
    console.log("Today is Wednesday");
    break;

  default:
    console.log("Today is not Monday, Tuesday or Wednesday");
}

// truthy and falsy values

// falsy values: false, 0, "", null, undefined, NaN, -0, 0n
// truthy values: true, any number other than 0, any string other than empty string, {}, [], function, anything other than falsy values

let value = 0;

if (value) {
  console.log("learning Truthy value");
} else {
  console.log("learning Falsy value");
}

// Another example
const emptyString = "";
if (emptyString) {
  console.log("learning Truthy value");
} else {
  console.log("learning Falsy value");
}

// example with array

const emptyArray = [];

if (emptyArray.length === 0) {
  console.log("Array is empty");
}

// example with object
const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??): It is used to provide a default value if the value is null or undefined
// syntax: value1 ?? value2

let val1;
let val2 = 10;

let result = val1 ?? val2;
console.log(result); // 10

let someMoreResult = null ?? val2;
console.log(someMoreResult); // 10

let someAnotherResult = undefined ?? val2;
console.log(someAnotherResult); // 10

// How nullish coalescing operator works is: It checks the value1, if it is null or undefined, it will return value2, otherwise it will return value1
// It is similar to logical or operator (||) but it doesn't return the value if it is falsy, it only returns if it is null or undefined

// Terinary operator: It is used to assign a value based on a condition
// syntax: condition ? value1 : value2

const chocholatePrice = 100;
chocholatePrice >= 100
  ? console.log("I will buy it")
  : console.log("I will not buy it");
// the output will be "I will buy it"
// if the condition is true, it will return value1, otherwise it will return value2
// It is similar to short hand if else statement
