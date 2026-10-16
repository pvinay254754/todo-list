const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = taskInput.value.trim();

    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    
    const li = document.createElement("li");

    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

   
    const span = document.createElement("span");
    span.textContent = taskText;

    
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed", checkbox.checked);
    });

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    
    taskList.appendChild(li);

    
    taskInput.value = "";

    
    taskInput.focus();
}


addButton.addEventListener("click", addTask);


taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});