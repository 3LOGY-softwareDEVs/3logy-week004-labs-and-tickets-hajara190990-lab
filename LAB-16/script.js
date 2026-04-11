const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const counterEl = document.getElementById('counter');

// Add task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.className = 'task-text';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✓';
  completeBtn.className = 'complete-btn';
  completeBtn.onclick = function () {
    li.classList.toggle('completed');
    updateCounter();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.className = 'delete-btn';
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
    updateCounter();
  };

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  updateCounter();
}

// Enter key support
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Add button click
addBtn.addEventListener('click', addTask);

// Clear all tasks
function clearAllTasks() {
  taskList.innerHTML = '';
  updateCounter();
}

// Mark all complete
function markAllComplete() {
  const items = taskList.querySelectorAll('li');
  items.forEach(li => li.classList.add('completed'));
  updateCounter();
}

// Update counter
function updateCounter() {
  const total = taskList.querySelectorAll('li').length;
  const completed = taskList.querySelectorAll('li.completed').length;
  counterEl.textContent = `Tasks: ${total} | Completed: ${completed}`;
}
