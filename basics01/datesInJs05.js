// Date Object in JavaScript:

// let aDate = new Date();
// console.log(aDate); // 2021-09-29T06:45:45.000Z
// console.log(aDate.toDateString()); // Wed Sep 29 2021
// console.log(aDate.toTimeString()); // 12:15:45 GMT+0530 (India Standard Time)
// console.log(aDate.toLocaleDateString()); // 9/29/2021
// console.log(aDate.toLocaleTimeString()); // 12:15:45 PM
// console.log(aDate.toISOString()); // 2021-09-29T06:45:45.000Z
// console.log(aDate.toUTCString()); // Wed, 29 Sep 2021 06:45:45 GMT
// console.log(aDate.toString()); // Wed Sep 29 2021 12:15:45 GMT+0530 (India Standard Time)
// In JavaScript, months are zero-based, meaning January is 0, February is 1, and so on.
// The getMonth() method returns the month of a date as a number (0-11).
// The getFullYear() method returns the year of a date as a four-digit number.
// The getDate() method returns the day of a date as a number (1-31).
// The getDay() method returns the weekday of a date as a number (0-6).
// The getHours() method returns the hour of a date as a number (0-23).
// The getMinutes() method returns the minutes of a date as a number (0-59).
// The getSeconds() method returns the seconds of a date as a number (0-59).
// The getMilliseconds() method returns the milliseconds of a date as a number (0-999).
// The getTime() method returns the number of milliseconds since January 1, 1970.

let anotherDate = new Date(2021, 8, 29, 12, 15, 45, 0);
console.log(anotherDate); // 2021-09-29T06:45:45.000Z
console.log(anotherDate.toDateString()); // Wed Sep 29 2021
console.log(anotherDate.toTimeString()); // 12:15:45 GMT+0530 (India Standard Time)
console.log(anotherDate.toLocaleDateString()); // 9/29/2021
console.log(anotherDate.toLocaleTimeString()); // 12:15:45 PM
console.log(anotherDate.toISOString()); // 2021-09-29T06:45:45.000Z
console.log(anotherDate.toUTCString()); // Wed, 29 Sep 2021 06:45:45 GMT
console.log(anotherDate.toString()); // Wed Sep 29 2021 12:15:45 GMT+0530 (India Standard Time)
console.log(anotherDate.getMonth()); // 8
console.log(anotherDate.getFullYear()); // 2021
console.log(anotherDate.getDate()); // 29
console.log(anotherDate.getDay()); // 3
console.log(anotherDate.getHours()); // 12
console.log(anotherDate.getMinutes()); // 15
console.log(anotherDate.getSeconds()); // 45
console.log(anotherDate.getMilliseconds()); // 0
console.log(anotherDate.getTime()); // 1632893145000

let yetAnotherDate = Date.now();
console.log(yetAnotherDate); // 1632893145000
console.log(new Date(yetAnotherDate)); // 2021-09-29T06:45:45.000Z
console.log(new Date(yetAnotherDate).toDateString()); // Wed Sep 29 2021
console.log(Math.floor(Date.now() / 1000)); // 1632893145

let someDate = new Date();
console.log(
  someDate.toLocaleString("Default", {
    timeZone: "Europe/London",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }),
);
