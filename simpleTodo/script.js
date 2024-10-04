const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task.");
    return;
  }
  const item = document.createElement("li");
  item.innerHTML = inputBox.value;
  list.appendChild(item);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  item.appendChild(span);

  inputBox.value = "";
  saveData();
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("completed");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function loadData() {
  list.innerHTML = localStorage.getItem("data");
}

loadData();
