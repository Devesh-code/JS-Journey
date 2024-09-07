//------------------------------------------------- Datatypes ------------------------------------------------------

// 1. Number => 1, 1.1, -1, -1.1, 0, 0.1, -0.1, Infinity, -Infinity, NaN
// 2. String => 'Hello', "Hello", `Hello`(prefer "")
// 3. Boolean => true or false
// 4. Undefined => typeof undefined => undefined (stand alone value, variable not assigned any value)
// 5. Null => typeof null => object (stand alone value)
// 6. Symbol => unique and immutable value, used as object property keys
// 7. BigInt => typeof 1n => bigint (new primitive type, can represent whole numbers larger than 2^53 - 1)
// 8. Object =>
// 9. Function
// 10. Array
// 11. Date

// let n = NaN; // not a number
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object
// console.log(typeof n);

/*

Number:
Represents both integer and floating-point numbers.
example: 1,1.1, -1, 0, 0.1, -0.1
Special values: Infinity, -Infinity, NaN (Not a Number)

String:
Represents textual data.
Can be enclosed in single quotes (''), double quotes (" "), or backticks (``).
Preference is often given to double quotes ("").

Boolean:
Represents a logical entity with two values: true or false.

Undefined:

Represents a variable that has been declared but not assigned a value.
The type of undefined is also "undefined".

Null:
Represents a deliberate non-value or absence of any object value.
Interestingly, typeof null returns "object", which is considered a historical bug in JavaScript.

Date:
A built in object that stores date and time.

Symbol:
Introduced in ECMAScript 2015 (ES6).
Represents a unique identifier.
Often used as keys for object properties to avoid naming conflicts.

BigInt:
A newer primitive type introduced to represent integers larger than 2^53 - 1.
Denoted by appending 'n' to an integer or by calling BigInt().

Object:
A collection of key-value pairs.
Can include arrays, functions, and other complex data structures.

Function:
A special type of object in JavaScript.
Can be invoked and passed as arguments to other functions.

Array:
A special type of object used to store ordered
collections of data.

It's worth noting that JavaScript is a dynamically typed language, meaning variables can hold different types of data
at different times during execution. The 'typeof' operator is used to determine the type of a value, as demonstrated above.

*/

// ============================================================== Type Conversion =========================================================================
// 1. Implicit Conversion (Type Coercion)
// JavaScript automatically converts the data type of a value to another data type when needed.

// Example: 1 + '1' => '11' (number is converted to string)
// Example: 1 - '1' => 0 (string is converted to number)
// Example: true + 1 => 2 (boolean is converted to number)
// Example: '1' == 1 => true (string is converted to number for comparison)
// Example: '1' === 1 => false (strict equality operator does not perform type conversion)

// 2. Explicit Conversion
// Developers can explicitly convert data types using built-in functions or operators.
// Example: Number('1') => 1 (converts string to number)
// Example: String(1) => '1' (converts number to string)
// Example: Boolean(1) => true (converts number to boolean)
// Example: parseInt('1') => 1 (parses string to integer)
// Example: parseFloat('1.1') => 1.1 (parses string to float)
// Example: String(1 + 1) => '2' (converts result of expression to string)
// Example: Number('hello') => NaN (returns NaN for invalid conversion)
// Example: Boolean(0) => false (converts number to boolean)
// Example: Boolean('') => false (converts empty string to boolean)
// Example: Boolean('hello') => true (converts non-empty string to boolean)
// Example: Boolean(undefined) => false (converts undefined to boolean)
// Example: Boolean(null) => false (converts null to boolean)
// Example: Boolean(NaN) => false (converts NaN to boolean)
// Example: Boolean([]) => true (converts non-empty array to boolean)
// Example: Boolean({}) => true (converts non-empty object to boolean)
// Example: Boolean(function() {}) => true (converts function to boolean)
// Example: Boolean(Symbol()) => true (converts symbol to boolean)

let x = 1;
let a = "anything123";

console.log(x + "1"); // 11
console.log(typeof x);
console.log(typeof a);

let somethingNew = Number(a); //NaN
console.log(somethingNew);

//" 33anything" => NaN

let check = 0.02;
let findCheck = Boolean(check);
console.log(findCheck);

// in JS, 0, '', null, undefined, NaN => false
// in JS, 1, 'anything', [], {}, function(){} => true
// in JS, 0.1, -1, '0', 'false', 'null', 'undefined', 'NaN' => true

// Js is loosely typed language so it has some weird behavior with maths operations
let rounded = Math.round(0.1 + 0.2); // 0.3 => 0.30000000000000004
console.log(rounded); // 0

//================================================== operations ========================================================

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log(1 + 2); // 3
// console.log("1" - 2); // -1
// console.log(1 - "2"); // -1
// console.log("1" - "2"); // -1
// console.log("1" * "2"); // 2
// console.log("1" / "2"); // 0.5
// console.log("1" + 2 + 3); // 123
// console.log(1 + 2 + "3"); // 33
// console.log(1 + "2" + 3); // 123
// console.log(1 + 2 * "3"); // 7
// console.log(typeof ("1" - "3")); // number

// console.log(null > 0); // false
// console.log(null == 0);// false
// console.log(null >= 0);// true because in <= and >=, null is converted to 0

console.log(2 === "2"); // false
console.log(2 == "2"); // true

// clean code it is always better to use === and !==

// ==================================================  interview warthy topics  ===========================================================================

// In Js data types are divided into two categories on the basis of their behavior and how they are stored in memory.
// Primitive data types
// number, string, boolean, undefined, null, symbol, bigint // Primitive data types

const id = Symbol("123");
console.log(id);
const anothqerId = Symbol("123");
console.log(anothqerId);
console.log(id === anothqerId);

// Reference or Non-primitive data types
// object, array, function, date

let obj = {
  name: "John",
  age: 30,
};

// another ways to create object
// let obj2 = new Object();
// console.log(obj2);

// let obj3 = Object.create(null);
// console.log(obj3);

// let obj4 = Object.create(Object.prototype);
// console.log(obj4);

// console.log({
//   name: "John Cina",
//   age: 50,
// });

// // Array
// let arr = [1, 2, 3, 4, 5];
// let arr2 = new Array(1, 2, 3, 4, 5);
// let arr3 = Array.of(1, 2, 3, 4, 5);
// let arr4 = Array.from("hello");
// console.log(arr4);

// // Function

// let func = function () {
//   console.log("Hello");
// };
// console.log(func);

// let func2 = new Function("console.log('Hello')");
// console.log(func2);

// let func3 = () => console.log("Hello");

// console.log(func3);
const myFunction = function (x, y) {
  return x + y;
};
console.log(myFunction(2, 3));

//  Arrow function syntax (shorter for simple functions)
const add = (x, y) => x + y;
console.log(add(2, 3));

// Anonymous function for immediate execution
(function () {
  console.log("This function runs immediately!");
})();

// memory representation of primitive and non-primitive data types
// Primitive data types are stored in the stack memory
// Stack memory is faster and has limited memory
// Stack memory is used for static memory allocation
// Stack memory is used for local variables and function calls where we get the copy of the orignal variable

//Example
let myname = "JohnWick";
let anotherName = myname;
myname = "JohnCina";
console.log(anotherName); // JohnWick
console.log(myname); // JohnCina

// Non-primitive data types are stored in the heap memory
// Heap memory is slower and has more memory
// Heap memory is used for dynamic memory allocation
// Heap memory is used for objects, arrays, functions, and other reference data types
// Heap memory is used for global variables and objects where we get the reference of the orignal variable

//Example
let myObj = {
  name: "JohnWick",
  id: 1,
};
let anotherObj = myObj;
myObj.name = "JohnCina";
console.log(anotherObj.name); // JohnCina
console.log(myObj.name); // JohnCina
