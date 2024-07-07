let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");

let addTask = () => {
  let task = inputBox.value;
  if (task === "") {
    alert("Please enter a task!");
    return;
  } else {
    let li = document.createElement("li");
    li.innerText = task;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

let saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

let showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
