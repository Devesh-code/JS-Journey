const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.id === "grey") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "red") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "purple") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "green") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === "yellow") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });

// improved code

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    (e) => {
      // this a best approach to add events to single or multiple elements using addEventListener which is more efficient than using onclick.
      body.style.backgroundColor = e.target.id;
    },
    false,
  );
});

// events : type of events
// click, mouseover, mouseout, keydown, keyup, keypress, focus, blur, submit, change, load, resize, scroll, etc.
// type, target, currentTarget, preventDefault, stopPropagation, defaultPrevented, etc.
// clineX, clientY, pageX, pageY, screenX, screenY, etc.
// key, code, keyCode, charCode, etc.
//
// event propagation:
// bubbling: when an event is triggered on an element, it will bubble up to the parent elements.
// capturing: when an event is triggered on an element, it will be captured by the parent elements.
// stopPropagation: stops the event from bubbling up or capturing.
// preventDefault: prevents the default behavior of the event.
