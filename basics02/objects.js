// Objects in JavaScript
// Objects are a core concept in JavaScript, allowing developers to create complex data structures and organize code more effectively. An object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any data type. Objects are used to represent real-world entities, such as users, products, or events, and can contain properties and methods that define their behavior.
//
//

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
// sytax: const mySymbol = Symbol("mySymbol"); // here the name of the symbol is optional and is used for debugging purposes
const mySymbol = Symbol("mySymbol");
console.log([mySymbol]); // [Symbol(mySymbol)]

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

/*
In JavaScript, there are two ways to create an object — the literal notation and the constructor(singleton) function. Objects created using object literals are singletons. This means when a change is made to the object, it affects that object across the entire script. Object defined with a function constructor let us have multiple instances of that object. This means change made to one instance, will not affect other instances.
Object Literal Notation

Let’s explore some examples of what literal notation looks like, and how the process of creating objects may be streamlined by using constructors.

Let’s say a dog walker wants to keep track of all dogs they walk. We’ll create a dog object using literal notation:
*/

const dog = {
  name: "Fido",
  age: 3,
  bread: "Golden Retriever",
  bark: function () {
    console.log("Woof woof!");
  },
};

const anotherDog = {
  name: "Buddy",
  age: 5,
  bread: "Labrador",
  bark: function () {
    console.log("Woof woof!");
  },
};

console.log(dog.name); // Fido
console.log(anotherDog.name); // Buddy

// This is the simple way of creating object but it is not scalable. If we have to create multiple objects then we have to write the same code again and again. So, we can use constructor function to create multiple objects with same properties and methods using singleton pattern.
// Constructor Function

function Dogs(name, age, bread) {
  this.name = name;
  this.age = age;
  this.bread = bread;
  this.bark = function () {
    console.log("Woof woof!");
  };
}

const dog1 = new Dogs("Fido", 3, "Golden Retriever");
const dog2 = new Dogs("Buddy", 5, "Labrador");

console.log(dog1.name); // Fido
console.log(dog2.name); // Buddy
// See this is much cleaner and scalable way of creating objects. We can create multiple objects with same properties and methods using constructor function. This is called singleton pattern.

// nested objects

const person1 = {
  name: "Devesh",
  age: 23,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
};
// We can go as nested as we want. We can have objects inside objects inside objects and so on. We can access the nested object properties using the dot notation or the bracket notation.

console.log(person1.address.city); // Mumbai

// objects concatination

let a = {
  name: "Devesh",
  age: 23,
};

let b = {
  location: "India",
  email: "somthing@gmail.com",
};

let c = a + b;
console.log(c); // [object Object][object Object]
// The above code will not work as expected. We can not concatenate objects like this. We can use Object.assign() method to concatenate objects.
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

//const aResult = Object.assign(a, b);
//console.log(aResult); // { name: 'Devesh', age: 23, location: 'India', email:'something@gmail.com' }
console.log(a);

// But the above code will change the original object a. If we want to keep the original object as it is and create a new object with the concatenated values, we can pass an empty object as the first argument to the Object.assign() method.

const anotherResult = Object.assign({}, a, b);
console.log(anotherResult); // { name: 'Devesh', age: 23, location: 'India', email:'something@gmail.com' }
console.log(a); // { name: 'Devesh', age: 23 }

// reccomended way to concatenate objects
// But we can also use the spread operator to concatenate objects. The spread operator is a more modern way of doing the same thing.
// The spread operator is used to expand an iterable object into individual elements. It is commonly used to make shallow copies of objects.

const spreadResult = { ...a, ...b };
console.log(spreadResult); // { name: 'Devesh', age: 23, location: 'India', email:'something@gmail.com' }
console.log(a); // { name: 'Devesh', age: 23 } // original object remains unchanged, Spread don't change the original object

// array of objects

const persons = [
  {
    name: "Devesh",
    age: 23,
  },
  {
    name: "Akshay",
    age: 25,
  },
  {
    name: "Aman",
    age: 24,
  },
];
// We can access the object properties in the array using the index and the dot notation or the bracket notation.
console.log(persons[0].name); // Devesh
console.log(persons[1].age); // 23

console.log(Object.keys(person1)); // [ 'name', 'age', 'address' ]
// The key() method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
// This will be used in futher database projects

console.log(Object.values(person1)); // [ 'Devesh', 23, { city: 'Mumbai', state: 'Maharashtra', country: 'India' } ]
// The values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
// This will be used in futher database projects

console.log(Object.entries(person1)); // [ [ 'name', 'Devesh' ], [ 'age', 23 ], [ 'address', { city: 'Mumbai', state: 'Maharashtra', country: 'India' } ] ]
// The entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.

console.log(person1.hasOwnProperty("name")); // true
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

console.log(person1.hasOwnProperty("email")); // false
// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

// objects destructuring
// Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) objects and Arrays.
// Destructuring allows you to assign a new variable name to the property while destructuring an object.

const course = {
  name: "JavaScript",
  duration: "3 months",
  CollegeStudent: "Devesh",
};

const { CollegeStudent: student } = course;

console.log(student); // Devesh
// Why we use destructuring? It makes the code cleaner and more readable. We can extract the properties of an object and assign them to variables in a single statement.
// This destructuring will used in react when we will use props and states. To make the code more readable and clean we use destructuring.
// We can also use destructuring with arrays.

// How to iterate over objects in JavaScript
// There are several ways to iterate over objects in JavaScript. We can use the for...in loop, Object.keys(), Object.values(), Object.entries() methods to iterate over objects.
// The for...in loop is used to iterate over the enumerable properties of an object. It iterates over the properties of an object in arbitrary order.

const myObj = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
};

for (let key in myObj) {
  console.log(key); // js py rb
  console.log(myObj[key]); // JavaScript Python Ruby
}

// Can we use for of loop to iterate over objects?
// No, we can not use the for...of loop to iterate over objects. The for...of loop is used to iterate over the values of an iterable object like an array or a string.
