const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
addTaskBtn.addEventListener("click", function() {
  console.log("Typed task:", taskInput.value);
});

addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  // see alert when input is empty
  if (taskText === "") {
    alert("Please write something first!");
    return;
  }

  // new <li> create
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  
  // li add delete button
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="btn btn-outline-danger btn-sm delete-btn">Delete</button>
  `;

  // cleakable delete button
  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  // append li
  taskList.appendChild(li);

  // empty input box
  taskInput.value = "";
});