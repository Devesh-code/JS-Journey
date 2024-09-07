// let n = 123; // primitive number
// console.log(typeof n, n);

// let anotherNumber = new Number(123.4532); // Number {123} // it is an object
// console.log(typeof anotherNumber, anotherNumber);

// // methods on Number object
// // toFixed, toPrecision, toString, valueOf, toExponential
// console.log(anotherNumber.toFixed(2)); // 123.45

// console.log(anotherNumber.toPrecision(2)); // 1.2e+2
// // It will round off the number to 2 digits before the decimal point
// console.log(anotherNumber.toPrecision(3)); // 123

// console.log(anotherNumber.toString(), anotherNumber.toString().length); // 123.4532 8

// console.log(anotherNumber.valueOf()); // 123.4532

// console.log(anotherNumber.toExponential(2)); // 1.23e+2
// // It will round off the number to 2 digits after the decimal point
// console.log(anotherNumber.toExponential(4)); // 1.235e+2

//console.log(hundrededs.toLocaleString("en-IN")); // 10,00,00,000
// It will add commas to the number as per the locale(en-IN means Indian locale)

//==================================== Math library Methods ===============================================
// Math is a built-in object that has properties and methods for mathematical constants and functions.
// It’s not a function object.
// Math works with the Number type. It doesn't work with Number objects.but we can use Number objects with Math methods
// Math is not a constructor. All properties and methods of Math are static. You refer to the constant pi as Math.PI and you call the sine function as Math.sin(x), where x is the method's argument.
// You can't create a new Math object. Math is a built-in object that has properties and methods for mathematical constants and functions. You can use Math object methods and properties directly.

// Math properties
//abs, ceil, floor, round, max, min, pow, sqrt, cbrt, random, sign, trunc, log, log10, log2, exp, sin, cos, tan, asin, acos, atan, atan2, sinh, cosh, tanh, asinh, acosh, atanh, hypot, imul, clz32, fround, log1p, expm1, cosh, sinh, tanh, asinh, acosh, atanh, hypot, trunc, sign, cbrt, log2, log10, log1p, expm1, fround, imul, clz32, toSource, toLocaleString, valueOf

// number properties
// max, min, NaN, NEGATIVE_INFINITY, POSITIVE_INFINITY, EPSILON, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, isFinite, isInteger, isNaN, isSafeInteger, parseFloat, parseInt

// let num = -123.4532;
// console.log(Math.abs(num)); // 123.4532
// console.log(Math.round(num)); // -123
// console.log(Math.ceil(num)); // -123
// console.log(Math.floor(num)); // -124

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Math.max(...nums)); // 9
// console.log(Math.min(...nums)); // 1
// console.log(Math.min(nums)); // NaN
// because we are passing an array and it is not a number so we need to use spread operator(...) to pass the array

console.log(Math.random()); // 0 to 1 random number
console.log(Math.random() * 10 + 1); // 1 to 10 random number
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10 random integer number

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // here what we are doing is we are generating a random number between 0 to (max-min) and then we are adding min to it so that it will be in the range of min to max
};
console.log(random(1, 10)); // 1 to 10

// In javaScript, all the numbers (weather it is a float or integer) are stored in 64-bit floating-point format (IEEE 754 standard) which is also known as double precision floating-point numbers.
// In javaScript, there is no separate data type for integers. All the numbers are stored in the form of floating-point numbers.
//
