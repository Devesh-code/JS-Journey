// // for loop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // nested for loop

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 2; j++) {
//     console.log(i, j);
//   }
// }

// let somearray = [1, 2, 3, 4, 5];
// console.log(somearray.length);
// for (let i = 0; i < somearray.length; i++) {
//   console.log(somearray[i]);
// }

// break and continue statements

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// foreach loop // it is used to iterate over the elements of an array // it is a method of array but we call it as a loop

// forEach does not return anything, it just iterates over the elements of an array
// forEach only works with arrays,map and set and not with objects because foreach is a property of array same with map and set

let colors = ["red", "green", "blue"];
colors.forEach(function (color) {
  console.log(color);
});
// how forEach loop works: For each element in the array, it will call the function that we pass to forEach loop and pass the element

// arrow function in forEach loop
colors.forEach((color) => {
  console.log(color);
});

// using callback function in forEach loop
// callback function is a function that is passed as an argument to another function
// callback function is called by the function in which it is passed
// callback function is used to perform some action after the completion of the function

function printColor(color) {
  console.log(color);
}
colors.forEach(printColor); // it will print the elements of the array

// how much access does forEach loop have of array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});

// foreach loop with array of objects
let employees = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
];
employees.forEach(function (employee) {
  console.log(employee.name, employee.age);
});

// for in loop // it is used to iterate over the properties of an object
let heros = [
  "Ironman",
  "Sentry",
  "Wonderman",
  "Watcher",
  "Falcon",
  "Hulk",
  "Beta Ray Bill",
];
for (let hero in heros) {
  console.log(hero);
} // it will print the index of the array

// for of loop // it is used to iterate over the elements of an array
for (let hero of heros) {
  console.log(hero);
} // it will print the elements of the array

// while loop

let count = 10;
while (count > 0) {
  console.log(count);
  count--;
} // it will print 10 to 1

// do while loop
// it is similar to while loop but the difference is, in do while loop, the code block will execute at least once even if the condition is false

let anotherCount = 10;
do {
  console.log(anotherCount);
  anotherCount--;
} while (anotherCount > 10); // it will print 10
