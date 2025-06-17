/*firstly we have to create vaiables to access the input and buttons*/

const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#btn");
const listContainer = document.querySelector("#listcontainer");
const searchEngine = document.querySelector("#search-engine");
const mode = document.querySelector("#mode");

// creating function

// adding functionality
function addTask(e) {
  if (inputBox.value == "") {
    alert("Please enter your Task...");
    return;
  } else {
    const inputText = inputBox.value;
    const liItem = document.createElement("li");
    const litext = document.createElement("p");
    litext.innerHTML = inputText;
    liItem.appendChild(litext);
    listContainer.appendChild(liItem);
    inputBox.value = "";

    // delete button

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Done";
    deleteBtn.classList.add("btn", "deleteBtn");
    liItem.appendChild(deleteBtn);
    savedata();
  }
}
// delete Button functionality

function remove(e) {
  if (e.target.classList.contains("deleteBtn")) {
    if (confirm("Are You sure you want to delete")) {
      listContainer.removeChild(e.target.parentElement);
      savedata();
    }
  }
}

function searchengine(e) {
  const searchText = e.target.value.toLowerCase();
  const listItem = document.getElementsByTagName("li");
  listArray = Array.from(listItem);
  listArray.forEach((item) => {
    if (item.firstChild.textContent.toLowerCase().indexOf(searchText) !== -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function theme() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    mode.innerHTML = "Light";
  } else {
    mode.innerHTML = "Dark";
  }
}

// functions call
addBtn.addEventListener("click", addTask);
listContainer.addEventListener("click", remove);
searchEngine.addEventListener("input", searchengine);
mode.addEventListener("click", theme);
// localStorage function

function savedata() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showtask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showtask();
