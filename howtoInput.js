// There are many ways to take input from the user in JavaScript. The most common way is to use the prompt() function. The prompt() function is a built-in function in JavaScript that displays a dialog box with a message prompting the user to input some text. The prompt() function returns the text entered by the user as a string. Here is an example of how to use the prompt() function to take input from the user:

// if we run this code in the browser, it will work fine. But if we run this code in node.js, it will not work because the prompt() function is not available in node.js.

// In browser, we don't need to import prompt() function

// but in node.js, to use prompt() function, you need to install the prompt-sync package. You can install the prompt-sync package using the npm (Node Package Manager) command line tool. And then you can use the prompt() function to take input from the user. Here is an example of how to use the prompt() function to take input from the user in node.js:

//single value input

//const prompt = require("prompt-sync")(); // To use prompt in node also need it import it from prompt-sync using require
// here if we don't use singint: true inside it, require("prompt-sync")({ sigint: true }), then we can't stop the program by pressing ctrl+c and it will keep running untill it exit by self and don't let user exit the program

// let someInput = prompt("Enter any number: ");
// console.log(`You entered: ${someInput}`);
// console.log(typeof someInput); // string

//multiple value input

// let [a, b] = prompt("Enter two numbers separated by space: ").split(" ");
// console.log(`You entered: ${a} and ${b}`);
// console.log(typeof a); // string
// console.log(typeof b); // string

// let see this program in action

const prompt = require("prompt-sync")({ sigint: true }); // singint: true is used to stop the program by pressing ctrl+c
// here if we don't use singint: true inside it, require("prompt-sync")({ sigint: true }), then we can't stop the program by pressing ctrl+c and it will keep running untill it exit by self and don't let user exit the program

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt("Guess a number from 1 to 10: ");
  // Convert the string input to a number
  guess = Number(guess);

  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log("Congrats, you got it!");
    foundCorrectNumber = true;
  } else {
    console.log("Sorry, guess again!");
  }
}

// We can take input in array also as well as in object

// let [a, b] = prompt("Enter two numbers separated by space: ").split(" ");
// console.log(`You entered: ${a} and ${b}`);
// console.log(typeof a); // string
// console.log(typeof b); // string

// let { a, b } = prompt("Enter two numbers separated by space: ").split(" ");
// console.log(`You entered: ${a} and ${b}`);
// console.log(typeof a); // string
// console.log(typeof b); // string
