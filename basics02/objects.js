// Objects in JavaScript
// Objects are a core concept in JavaScript, allowing developers to create complex data structures and organize code more effectively. An object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type. Objects are used to represent real-world entities, such as users, products, or events, and can contain properties and methods that define their behavior.
//
//

// singleton object
/*
The code defines a single object called 'person'. This is often refrred to as a singleton object, as it is a single instance of an object that is used throughout the codebase. The object has three properties: 'name', 'age', and 'greet'. The 'name' and 'age' properties store the person's name and age, respectively. The 'greet' property is a function that logs a greeting message to the console, including the person's name and age. The function uses the 'this' keyword to access the object's properties within the function. The 'person' object is then logged to the console, which will display the object's properties and methods. The 'greet' method is invoked using the 'person.greet()' syntax, which will log the greeting message to the console.
*/
const person = {
  name: "Devesh",
  age: 23,
  greet: function () {
    console.log(
      "Hello, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old.",
    );
  },
};
//console.log(person.greet()); // Hello, my name is Devesh and I am 23 years old. undefined (return value of greet method)
// The second line 'undefined' is because the 'greet' method does not return anything, so it returns 'undefined' by default.

person.greet(); // Hello, my name is Devesh and I am 23 years old.

console.log(Object.getPrototypeOf(person)); // [object: null prototype] {}
console.log(person.hasOwnProperty("name")); // true

// symbol object declaration
const mySymbol = Symbol("mySymbol");
console.log([mySymbol]); // [Symbol(mySymbol)]

// object literal
// An object literal is a comma-separated list of key-value pairs wrapped in curly braces. The keys are strings or symbols, and the values can be any data type, including other objects, arrays, and functions. Object literals are a convenient way to create objects in JavaScript, as they allow developers to define the object's properties and methods in a single expression.
const obj = {
  [mySymbol]: "HelloKey", // this is the sytax to create a symbol key and assign a value to it
  name: "Devesh",
  age: 23,
  location: "India",
  email: "somebody@gmail.com",
  isLogged: false,
  lastLogin: new Date(),
};

Object.freeze(obj); // this will freeze the object and prevent any changes to it
obj.isLogged = true; // TypeError: Cannot assign to read only property 'isLogged' of object '#<Object>'
obj.name = "John"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>'

console.log(obj[mySymbol]); // HelloKey
console.log(obj.isLogged);
console.log(obj.lastLogin); // 2021-08-07T06:00:00.000Z
console.log(obj);
console.log(obj["age"]); // 23

// We can access the object properties using the dot notation or the bracket notation. The bracket notation is useful when the property name is stored in a variable or when the property name is a symbol.

// The Object.freeze() method is used to freeze an object, preventing new properties from being added to it, existing properties from being removed, and existing properties from being changed. It also prevents the prototype of the object from being changed. The method returns the object that was passed to it. Once an object is frozen, it cannot be unfrozen.

// The Object.seal() method is used to seal an object, preventing new properties from being added to it and existing properties from being removed. However, existing properties can still be changed. The method returns the object that was passed to it. Once an object is sealed, it cannot be unsealed.
//
