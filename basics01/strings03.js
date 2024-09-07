const yourname = "Itadori";
const repoCount = 50;

//console.log(yourname + repoCount + "anything"); // not a good way to do concatenation

// string interpolation is recommended way to do concatenation
console.log(
  `${yourname.toUpperCase()} has ${repoCount.toString()} repositories on GitHub`,
);

// we can also create a string using new String() constructor but it is not recommended
// because it is slower and has some weird behavior
let str = new String("anything"); // String {0: "a", 1: "n", 2: "y", 3: "t", 4: "h", 5: "i", 6: "n", 7: "g", length: 8, [[PrimitiveValue]]: "anything"} // it is an object
console.log(str);

//--------------------------------------------------------- String Methods --------------------------------------------------------------------

// we can also use string methods like split, slice, substr, substring, replace, toLowerCase, toUpperCase, trim, charAt, charCodeAt, concat, includes, indexOf, lastIndexOf, match, repeat, search, startsWith, endsWith, valueOf etc.

/*


Warning: You should rarely find yourself using String as a constructor.

String primitives and String objects also give different results when using eval().
Primitives passed to eval are treated as source code; String objects are treated as all other objects are, by returning the object.

For example:

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

For these reasons, the code may break when it encounters String objects when it expects a primitive string instead,
although generally, authors need not worry about the distinction.

A String object can always be converted to its primitive counterpart with the valueOf() method.

console.log(eval(s2.valueOf())); // returns the number 4

*/
// Terinary operator in js
let val1 = 23;
let val2 = 45;
console.log(val1 >= val2 ? val1 : val2);

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
console.log(areEqualCaseInsensitive("hey", "")); // false
