// Get references to the input box and list elements
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
  // Check if the input is empty
  if (inputBox.value === "") {
    alert("Please enter a task.");
    return;
  }
  // Create a new list item
  const item = document.createElement("li");
  // Set the item's text to the input value
  item.innerHTML = inputBox.value;
  // Add the new item to the list
  list.appendChild(item);

  // Create a span element for the delete button
  let span = document.createElement("span");
  // Set the span's text to the multiplication symbol (×)
  span.innerHTML = "\u00d7";
  // Add the span to the list item
  item.appendChild(span);

  // Clear the input box
  inputBox.value = "";
  // Save the updated list to local storage
  saveData();
}

// Add a click event listener to the list
list.addEventListener(
  "click",
  function (e) {
    // If a list item is clicked
    if (e.target.tagName === "LI") {
      // Toggle the 'completed' class
      e.target.classList.toggle("completed");
      // Save the updated list to local storage
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // If the span (delete button) is clicked, remove the parent list item
      e.target.parentElement.remove();
      // Save the updated list to local storage
      saveData();
    }
  },
  false,
);

function saveData() {
  // Save the entire list's HTML to local storage
  localStorage.setItem("data", list.innerHTML);
}

function loadData() {
  // Load the list's HTML from local storage and set it as the list's content
  list.innerHTML = localStorage.getItem("data");
}

// Load saved data when the script runs
loadData();
