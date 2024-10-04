const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskListContainer");
const form = document.querySelector("form");
let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTask() {
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

taskArr.forEach((task) => {
  taskList.innerHTML += `<div class="task" id=${task.id}>
    <p>${task.task}</p>
    <button class="delBtn">Delete</button>
    </div>`;
});

addBtn.addEventListener("click", () => {
  let task = taskInput.value;
  taskInput.value = "";
  if (task == "") return;
  //   console.log(task);
  let id = Date.now();
  taskArr.push({
    id: id,
    task: task,
    completed: false,
  });
  saveTask();

  taskList.innerHTML += `<div class="task" id=${id}>
            <p>${task}</p>
            <button class="delBtn">Delete</button>
          </div>`;
});

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const delTask = e.target.parentElement;
    taskArr = taskArr.filter((task) => task.id != delTask.id);
    saveTask();
    delTask.remove();
  });
});
