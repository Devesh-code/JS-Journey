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

let n = NaN; // not a number
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof n);

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
