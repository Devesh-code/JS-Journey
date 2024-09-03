//console.log("hello world from test.js");

// JavaScript initially desinged for web browsers but a nerd named Ryan Dahl created a runtime environment called Node.js which allows us to run JavaScript on the server side.
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
// Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

//----------------------------------------------------------------------------------

// -------------------------------  Variables  -------------------------------------

//----------------------------------------------------------------------------------
{
  const acId = 1234; //constant value can't be changed and const variable can only be used inside the block only where it is declared.
  let userName = "John"; // let variable can only be used inside the block only where it is declared.(Reccomended to use let)
  let acEmail = "anything@gmail.com";
  var acPass = "121"; // variable value can be changed anywhere in the code.(Not reccomended to use var)
  acCity = " noida "; // It is a global variable and can be used anywhere in the code. but not reccomended to use global variables.
  let state; // undefined variable
  console.table([acId, userName, acPass, acEmail, acCity]);
}

/*
Prefer using let over var because let is block scoped and var is function scoped.
*/
//console.log(userName);
//userName = "Doe";
//console.log(userName);
//console.log(acCity);
//acCity = "Delhi";
//console.log(acCity);
