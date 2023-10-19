
function newTask() {
  var taskText = document.getElementById("taskInput").value;
  if (taskText === "") {
    alert ("Please enter the task")
  }

  var li = document.createElement("li");
  li.innerText = taskText;
  
  
  var span = document.createElement("span");
  span.className = "close";
  span.innerText = "X";
  span.onclick = function() {
      var taskList = document.getElementById("taskList");
      taskList.removeChild(li);
  };

  li.appendChild(span);
  
 
  li.addEventListener("click", function() {
      li.classList.toggle("checked");
  });

  var taskList = document.getElementById("taskList");
  taskList.appendChild(li);
  
  document.getElementById("taskInput").value = "";
}


document.getElementById("addTask").addEventListener("click", newTask);


document.getElementById("taskInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      newTask();
  }
});
