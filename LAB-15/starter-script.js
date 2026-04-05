// Get references to elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  // TODO: Get input value
  const taskText = taskInput.value;
  
  // TODO: Validate (check if empty)
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  // TODO: Create list item (li)
  const li = document.createElement('li');
  
  // TODO: Create task text span
  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';
  
  // TODO: Create complete button
  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = function() {
    // Toggle 'completed' class on li
    li.classList.toggle('completed');
  };
  
  // TODO: Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function() {
    // Remove this li from taskList
    taskList.removeChild(li);
  };
  
  // TODO: Append elements
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  
  // TODO: Clear input
  taskInput.value = '';
}

// TODO BONUS: Add Enter key support
// taskInput.addEventListener('keypress', function(e) {
//   if (e.key === 'Enter') {
//     addTask();
//   }
// });
