const taskBox = document.querySelector("#taskBox");
const addBut = document.querySelector("#addBut");
const list = document.querySelector("#list");

// Save a task to localStorage
const addToLocal = (task) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Load tasks from localStorage and display them
const loadTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    addTag(task);
  });
};

// Add Delete Button and Functionality
const delTask = (listedTask, taskText) => {
  const delbut = document.createElement("button");
  delbut.innerText = "Delete";
  delbut.classList.add("deletebutton");
  listedTask.append(delbut);

  delbut.addEventListener("click", () => {
    // Remove task from DOM
    listedTask.remove();

    // Remove task from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((t) => t !== taskText); // Remove the specific task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
  });
};

// Add a new task to the DOM
const addTag = (task) => {
  const listedTask = document.createElement("li");
  listedTask.classList.add("flex", "justify-between");

  // Add task text
  const addedword = document.createElement("span");
  addedword.innerText = task;

  // Append text and delete button to the list item
  listedTask.append(addedword);
  delTask(listedTask, task);

  // Append the list item to the task list
  list.append(listedTask);
};

// Handle task input
const enteredvalue = () => {
  const newTask = taskBox.value.trim();

  if (newTask.length > 0) {
    taskBox.value = ""; // Clear the input field
    addToLocal(newTask); // Save to localStorage
    addTag(newTask); // Add to the DOM
  } else {
    alert("Please enter a task");
  }
};

// Event listener for Add button
addBut.addEventListener("click", enteredvalue);

// Event listener for Enter key
taskBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enteredvalue();
  }
});

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);
