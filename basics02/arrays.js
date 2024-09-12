// In javascript, arrays are also objects.
// In js arrays are stored in the heap memory and they are dynamic in nature. which means we can add or remove elements(resizable) from the array anythime dynamically.
// An array can hold diffrent diffqrent data types.
// When we copy an array, we are copying the reference of the original array (shallow copy) not the actual array but we can change the OG array with that refrence array.
// But when we copy an array using the spread(...) operator, we are copying the actual array (deep copy) So we can't change the OG array with that copied array.

let arr0 = [1, 2, 3, 4, 5];

// Shallow copy
let anotherArr = arr0;
arr0[0] = 100;
//console.log(arr); // [100, 2, 3, 4, 5]

// Deep copy
let anotherArr2 = [...arr0];
arr0[0] = 200;
console.log("arr values: ", arr0); // [200, 2, 3, 4, 5]
anotherArr2[3] = 69;
console.log("anotherArr2 values: ", anotherArr2); // [100, 2, 3, 4, 5]

// however, note that this is only a shallow copy, so if the array contains nested objects, arrays, those nested objects will still be passed by reference. not deep copy.
// example
let arr1 = [1, 2, 3, [4, 5]];
let anotherArr3 = [...arr1];
arr1[3][0] = 100;
console.log("arr1 values: ", arr1); // [1, 2, 3, [100, 5]]
console.log("anotherArr3 values: ", anotherArr3); // [1, 2, 3, [100, 5]]

const strArr = ["captain Amarica", "Ironman", "Spidermen", "Thor"];
console.table(strArr);

// ----------------------------------  Array methods  ----------------------------------------------
// 1. push() - add an element at the end of the array
// 2. pop() - remove an element from the end of the array
// 3. shift() - remove an element from the beginning of the array
// 4. unshift() - add an element at the beginning of the array
// 5. splice() - add or remove elements from the array
// 6. slice() - returns a new array from the given start index to the end index
// 7. concat() - merge two or more arrays
// 8. includes() - check if an element is present in the array
// 9. indexOf() - returns the index of the first occurrence of the element
// 10. lastIndexOf() - returns the index of the last occurrence of the element
// 11. join() - join all the elements of the array into a string
// 12. toString() - converts the array into a string
// 13. reverse() - reverse the array
// 14. fill() - fill the array with the given value
// 15. filter() - filter out elements based on a condition
// 16. map() - create a new array by performing a function on each array element
// 17. reduce() - reduce the array to a single value
// 18. find() - find the first element that satisfies the condition
// 19. findIndex() - find the index of the first element that satisfies the condition
// 20. sort() - sort the array
// 23. forEach() - loop through each element of the array
// 24. isArray() - checks if the object is an array
// 25. from() - creates a new array from an array-like object
// 26. of() - creates a new array from the arguments passed to it
// 27. entries() - returns an array iterator object with key/value pairs
// 28. keys() - returns an array iterator object with keys
// 29. values() - returns an array iterator object with values
// 30. copyWithin() - copies array elements to another position in the array
// and etc more methods are there.

// examples
let a_new_arr = [1, 2, 3, 4, 5];

a_new_arr.push(6);
console.log(a_new_arr); // [1, 2, 3, 4, 5, 6]

a_new_arr.pop();
console.log(a_new_arr); // [1, 2, 3, 4, 5]

a_new_arr.shift();
console.log(a_new_arr); // [2, 3, 4, 5]

a_new_arr.unshift(1);
console.log(a_new_arr); // [1, 2, 3, 4, 5]

a_new_arr.splice(2, 0, 69); // add 69 at index 2
console.log(a_new_arr); // [1, 2, 69, 3, 4, 5]

let slicedArr = a_new_arr.slice(2, 4); // returns a new array from index 2 to 4
console.log(slicedArr); // [69, 3]

let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let mergedArr = arr4.concat(arr5);
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

console.log(a_new_arr.includes(69)); // true

console.log(a_new_arr.indexOf(69)); // 2

console.log(a_new_arr.lastIndexOf(69)); // 2

console.log(a_new_arr.join(" HELOO")); // 1 2 69 3 4 5 (HELOO)
console.log(typeof a_new_arr);

console.log(a_new_arr.toString()); // 1,2,69,3,4,5

console.log(a_new_arr.reverse()); // [5, 4, 3, 69, 2, 1]

console.log(a_new_arr.fill(0)); // [0, 0, 0, 0, 0, 0]

let filteredArr = a_new_arr.filter((element) => element > 2); // filter out elements greater than 2
console.log(filteredArr); // [3]

let mappedArr = a_new_arr.map((element) => element * 2); // multiply each element by 2
console.log(mappedArr); // [0, 0, 0, 0, 0, 0]

let reducedArr = a_new_arr.reduce((acc, curr) => acc + curr); // sum of all elements
console.log(reducedArr); // 0

let foundElement = a_new_arr.find((element) => element > 2); // find the first element greater than 2
console.log(foundElement); // 3

let foundIndex = a_new_arr.findIndex((element) => element > 2); // find the index of the first element greater than 2
console.log(foundIndex); // 2

let another_new_arr = [5, 89, 3, 1, 7, 34];

let sortedArr = another_new_arr.sort(); // sort the array
console.log(sortedArr); // [1, 3, 34, 5, 7, 89]

let forEachArr = another_new_arr.forEach((element) => console.log(element)); // loop through each element
// 1 3 34 5 7 89

let isArray = Array.isArray(another_new_arr); // check if the object is an array  // true
console.log(isArray); // true

let fromArr = Array.from("hello"); // create an array from a string
console.log(fromArr); // ['h', 'e', 'l', 'l', 'o']

let ofArr = Array.of(1, 2, 3, 4, 5); // create an array from the arguments passed to it
console.log(ofArr); // [1, 2, 3, 4, 5]

let entriesArr = another_new_arr.entries(); // returns an array iterator object with key/value pairs

for (let entry of entriesArr) {
  console.log(entry);
}
// [0, 1]
// [1, 3]
// [2, 34]
// [3, 5]
// [4, 7]
// [5, 89]
// keys() - returns an array iterator object with keys  // values() - returns an array iterator object with values
//
// copyWithin() - copies array elements to another position in the array
// example
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4);
console.log(arr); // [4, 2, 3, 4, 5]

// // Properties of an array
// 1. length - returns the length of the array (It is not a method, it is a property)
// 2. prototype - allows you to add properties and methods to an array object
// 3. constructor - returns the function that created the array object's prototype

//example
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.length); // 5
console.log(arr2.constructor); // [Function: Array]
console.log(arr2.prototype); // undefined

let someArray = [1, 2, 3, 4, 5];
let someAnotherArray = ["a", "b", "c"];

let allArrays = [someArray, someAnotherArray]; // merge two arrays by putting them in another array
console.log(allArrays); // [[1, 2, 3, 4, 5], ["a", "b", "c"]]
let allNewArrays = [...someArray, ...someAnotherArray]; // merge two arrays by spreading
console.log(allNewArrays); // [1, 2, 3, 4, 5, "a", "b", "c"]

let aResultArr = allArrays.flat(); // flatten the array
console.log(aResultArr); // [1, 2, 3, 4, 5, "a", "b", "c"]
let aResultArr2 = allArrays.flat(2); // flatten the array to a depth of 2
console.log(aResultArr2); // [1, 2, 3, 4, 5, "a", "b", "c"]
let aResultArr3 = allArrays.flat(Infinity); // flatten the array to an infinite depth
console.log(aResultArr3); // [1, 2, 3, 4, 5, "a", "b", "c"]

// map method is used to iterate over the elements of an array and return a new array
// syntax: array.map(callback function)

let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(function (number) {
  return number * 2;
}); // it will return a new array with elements multiplied by 2
