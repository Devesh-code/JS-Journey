// Maps in JavaScript are a collection of key-value pairs.
//  map are similar to objects but the key can be of any type and keys and values are ordered in insertion order.
// keys and values are qunique in map which duplicates are not allowed.
// Syntax: let myMap = new Map();
// Methods: set(), get(), has(), delete(), clear(), size(), keys(), values(), entries()
// set(): It is used to add elements to the map. It takes two arguments, first argument is the key and second argument is the value. It returns the map object.

// creating a map

let myMap = new Map();
//console.log(myMap); // Map(0) {}

// adding elements to the map
// set() method is used to add elements to the map
// set() method takes two arguments, first argument is the key and second argument is the value
// set() method returns the map object
// we can chain the set() method to add multiple elements to the map
// we can also add elements to the map using array of arrays

myMap.set("name", "Johan");
myMap.set(1, "One");
myMap.set(true, "Boolean");
myMap.set("name", "John");
myMap.set(2, "Two").set(false, "Boolean"); // chaining the set() method to add multiple elements to the map which is similar to the chaining of the methods in array. This simply means that we can call the methods one after the other.
myMap.set([1, 2, 3], "Array");
myMap.set({ a: 1, b: 2 }, "Object");
console.log(myMap); // Map(6) { 'name' => 'John', 1 => 'One', true => 'Boolean', 2 => 'Two', false => 'Boolean', [ 1, 2, 3 ] => 'Array', { a: 1, b: 2 } => 'Object' }

// getting the value from the map
// get() method is used to get the value from the map
// get() method takes the key as an argument and returns the value
// if the key is not present in the map, it will return undefined

console.log(myMap.get("name")); // John
console.log(myMap.get(1)); // One
console.log(myMap.get(true)); // Boolean
console.log(myMap.get(2)); // Two
console.log(myMap.get(false)); // Boolean
console.log(myMap.get([1, 2, 3])); // undefined
console.log(myMap.get({ a: 1, b: 2 })); // undefined

//====================================== methods in map =========================================================

// getting the size of the map
// size property is used to get the size of the map
// size property returns the number of key-value pairs in the map
// size property is read-only
// size property is similar to length property in array

console.log(myMap.size); // 6

// checking if the key is present in the map
// has() method is used to check if the key is present in the map

console.log(myMap.has("name")); // true

// deleting the key-value pair from the map
// delete() method is used to delete the key-value pair from the map
// delete() method takes the key as an argument and returns true if the key-value pair is deleted successfully otherwise it returns false

console.log(myMap.delete("name")); // true

// clearing the map
// clear() method is used to delete all the key-value pairs from the map
// clear() method doesn't take any argument and doesn't return anything
// clear() method returns undefined

//myMap.clear();
//console.log(myMap); // Map(0) {}

// iterating over the map
// for-of loop is used to iterate over the map
// for-of loop is used to iterate over the values of the map

// for (let value of myMap) {
//   console.log(value);
// }

// iterating over the keys of the map

for (let [key, value] of myMap) {
  console.log(key, "<::>", value);
}

// iterating over the values of the map
// values() method is used to get the values of the map
// values() method returns the values of the map
// values() method returns the iterable object
// we can use for-of loop to iterate over the values of the map

for (let value of myMap.values()) {
  console.log(value);
}

// Can we use for in loop to iterate over the map?
// No, we cannot use for-in loop to iterate over the map. for-in loop is used to iterate over the properties of the object. Map is not an object, it is a collection of key-value pairs. We can use for-of loop to iterate over the map.
// Or we can use forEach() method to iterate over the map. or the simple for loop to iterate over the map.
// forEach() method is used to iterate over the map. forEach() method takes a callback function as an argument and this callback function takes three arguments, value, key and the map object. forEach() method doesn't return anything.

// using simple for loop to iterate over the map

for (let i = 0; i < myMap.size; i++) {
  console.log(myMap.get(i));
}

// sets in JavaScript are a collection of unique elements.
// sets are similar to arrays but the elements are unique in sets.
// sets are used to store the unique elements.
// sets are used to remove the duplicates from the array.
// map vs set in JavaScript
// map is a collection of key-value pairs whereas set is a collection of unique elements.
// map is used to store the key-value pairs whereas set is used to store the unique elements.
// map is used to store the data in the form of key-value pairs whereas set is used to store the unique elements.

// example of set

// creating a set

let mySet = new Set();
console.log(mySet); // Set(0) {}

// adding elements to the set
// add() method is used to add elements to the set
// add() method takes one argument which is the element to be added to the set
// add() method returns the set object
// we can chain the add() method to add multiple elements to the set
// we can also add elements to the set using array
// we can also add elements to the set using string
// we can also add elements to the set using object
// we can also add elements to the set using map
// we can also add elements to the set using set
// we can also add elements to the set using array of arrays
// we can also add elements to the set using array of objects
// we can also add elements to the set using array of maps
// we can also add elements to the set using array of sets
// we can also add elements to the set using set of arrays
// we can also add elements to the set using set of objects
// we can also add elements to the set using set of maps
// we can also add elements to the set using set of sets
// we can also add elements to the set using map of arrays
// we can also add elements to the set using map of objects
// we can also add elements to the set using map of maps
// we can also add elements to the set using map of sets
// and so on...
// we can add any type of element to the set

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet); // Set(3) { 1, 2, 3 }

mySet.add(4).add(5).add(6); // chaining the add() method

console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 6 }

mySet.add([1, 2, 3]); // adding array to the set

console.log(mySet); // Set(7) { 1, 2, 3, 4, 5, 6, [ 1, 2, 3 ] }

mySet.add({ a: 1, b: 2 }); // adding object to the set

console.log(mySet); // Set(8) { 1, 2, 3, 4, 5, 6, [ 1, 2, 3 ], { a: 1, b: 2 } }

// adding elements to the set using array
// we can add elements to the set using array
// we can use spread operator to add elements to the set using array
// spread operator is used to spread the elements of the array

const aNewSet = new Set([1, 2, 3, 4, 5, 6]);
aNewSet.add(...[7, 8, 9]);

console.log(aNewSet); // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// adding elements to the set using string
// we can add elements to the set using string

const bNewSet = new Set("hello");
console.log(bNewSet); // Set(4) { 'h', 'e', 'l', 'o' }

// some methods of set
// has() method is used to check if the element is present in the set

console.log(mySet.has(1)); // true

// size property is used to get the size of the set

console.log(mySet.size); // 8

// deleting the element from the set

console.log(mySet.delete(1)); // true

// maps and sets have the same methods and properties
