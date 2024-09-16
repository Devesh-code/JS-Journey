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

// String Methods
// 1. charAt() - returns the character at the specified index
// 2. charCodeAt() - returns the Unicode of the character at the specified index
// 3. concat() - concatenates two or more strings
// 4. endsWith() - checks if a string ends with a specified value
// 5. fromCharCode() - converts Unicode values to characters
// 6. includes() - checks if a string contains a specified value
// 7. indexOf() - returns the position of the first found occurrence of a specified value in a string
// 8. lastIndexOf() - returns the position of the last found occurrence of a specified value in a string
// 9. localeCompare() - compares two strings in the current locale
// 10. match() - searches a string for a match against a regular expression, and returns the matches
// 11. repeat() - returns a new string with a specified number of copies of an existing string
// 12. replace() - searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
// 13. search() - searches a string for a specified value, or regular expression, and returns the position of the match
// 14. slice() - extracts a part of a string and returns a new string
// 15. split() - splits a string into an array of substrings
// 16. startsWith() - checks if a string starts with a specified value
// 17. substr() - extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// 18. substring() - extracts the characters from a string, between two specified indices
// 19. toLocaleLowerCase() - converts a string to lowercase letters, according to the host's locale
// 20. toLocaleUpperCase() - converts a string to uppercase letters, according to the host's locale
// 21. toLowerCase() - converts a string to lowercase letters
// 22. toString() - returns the value of a String object
// 23. toUpperCase() - converts a string to uppercase letters
// 24. trim() - removes whitespace from both ends of a string
// 25. valueOf() - returns the primitive value of a String object
// 26. padEnd() - pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length
// 27. padStart() - pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length
// 28. trimEnd() - removes whitespace from the end of a string
// 29. trimStart() - removes whitespace from the beginning of a string
// 30. normalize() - returns the Unicode Normalization Form of a given string
//  and so on...
