// filters  and  reducers in javascript
// // 1. filter() - filter out elements based on a condition
// // 2. map() - create a new array by performing a function on each array element
// // 3. reduce() - reduce the array to a single value
// // 4. find() - find the first element that satisfies the condition
// // 5. findIndex() - find the index of the first element that satisfies the condition
// // 6. sort() - sort the array
// // 7. forEach() - loop through each element of the array

// filters:
// filter() is used to filter out elements based on a condition. It returns a new array with the elements that pass the condition.

let a_new_arr = [1, 2, 3, 4, 5, 6];

let filteredArr = a_new_arr.filter((element) => element > 2); // filter out elements greater than 2
console.log(filteredArr); // [3]

// filter using forEach loop

let another_new_arr = [5, 89, 3, 1, 7, 34];

let filteredArr2 = [];
another_new_arr.forEach((element) => {
  if (element > 2) {
    filteredArr2.push(element);
  }
});
console.log(filteredArr2); // [5, 89, 3, 7, 34]

// using filter in a big array of objects which have books and genres with published year

let books = [
  { title: "The Alchemist", genre: "Fiction", year: 1988 },
  { title: "The Little Prince", genre: "science", year: 1943 },
  { title: "The Catcher in the Rye", genre: "Fiction", year: 1951 },
  { title: "To Kill a Mockingbird", genre: "history", year: 1960 },
  { title: "1984", genre: "novel", year: 1949 },
  { title: "Pride and Prejudice", genre: "Fiction", year: 1813 },
];

const filteredBooks = books.filter((book) => book.genre === "Fiction");

const filteredBooks2 = books.filter((book) => book.year > 1950);

console.log(filteredBooks);
console.log(filteredBooks2);

// map() is used to create a new array by performing a function on each array element. It returns a new array with the results of the function.
// map() does not change the original array.
// map() is used to transform the elements of an array.
// map() is similar to forEach() but it returns a new array.

let mappedArr = a_new_arr.map((element) => element * 2); // multiply each element by 2
console.log(mappedArr); // [2, 4, 6, 8, 10, 12]

// Chaining
// map() can be chained with other array methods like filter() and reduce().
// map() is used to transform the elements of an array, and then we can use filter() to filter out the elements based on a condition.

let chainedArr = a_new_arr
  .map((element) => element * 2)
  .filter((element) => element > 5); // multiply each element by 2 and filter out elements greater than 5
console.log(chainedArr); // [6, 8, 10, 12]

// reducers:
// reduce() is used to reduce the array to a single value. It takes a callback function with two parameters: the accumulator and the current value. The accumulator is the value that is returned after each iteration, and the current value is the current element being processed.
// The reduce() method can also take an initial value as the second argument.

let reducedArr = a_new_arr.reduce((acc, curr) => acc + curr); // sum of all elements
console.log(reducedArr); // 21
// reduce() have aacumulator and current value as arguments which basically adds the current value to the accumulator and returns the accumulator
// reduce() gives a single value as output
// reduce() can also take an initial value as the second argument

const myNums = [1, 2, 3, 4, 5];

const mySum = myNums.reduce((acc, curr) => acc + curr, 0); // here 0 is the initial value and acc is the accumulator and curr is the current value
console.log(mySum); // 15
