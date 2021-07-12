const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

let toDos = [];

function saveToDo() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function showToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.classList.add("del");
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);

  const span = document.createElement("span");
  span.classList.add("toDoContent");
  span.innerText = text;

  const currentID = toDos.length + 1;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = currentID;

  toDoList.appendChild(li);

  const todoObj = {
    text: text,
    id: currentID
  };
  toDos.push(todoObj);
  saveToDo();
}

function ToDo_submitHandler(event) {
  event.preventDefault();
  const currentTodo = toDoInput.value;
  showToDo(currentTodo);
  toDoInput.value = "";
}

function loadToDo() {
  const loadedToDo = localStorage.getItem(TODO_LS);
  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    parsedToDo.forEach(function (toDo) {
      showToDo(toDo.text)
    })
  }
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDo = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDo;
  saveToDo();
}


function init() {
  loadToDo();
  toDoForm.addEventListener("submit", ToDo_submitHandler);
}

init();