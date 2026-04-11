let tasks = [];
let currentFilter = 'all';
let currentSort = null;

const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const count = document.getElementById('count');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');
const completionPercent = document.getElementById('completionPercent');

// Add Task
addBtn.addEventListener('click', () => {
  const text = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (!text) {
    alert("Please enter a task!");
    return;
  }
  const task = {
    id: Date.now(),
    text,
    completed: false,
    priority,
    date: new Date()
  };
  tasks.push(task);
  taskInput.value = "";
  renderTasks();
});

// Event Delegation for Task Actions
taskList.addEventListener('click', (e) => {
  const id = e.target.closest('li')?.dataset.id;
  if (!id) return;

  if (e.target.classList.contains('delete-btn')) {
    tasks = tasks.filter(t => t.id != id);
  } else if (e.target.tagName === 'SPAN') {
    const task = tasks.find(t => t.id == id);
    task.completed = !task.completed;
  }
  renderTasks();
});

// Filters
document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    renderTasks();
  });
});

// Sorting
document.querySelectorAll('.sort button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentSort = btn.dataset.sort;
    renderTasks();
  });
});

// Get Filtered Tasks
function getFilteredTasks() {
  let filtered = tasks;
  if (currentFilter === 'active') {
    filtered = filtered.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filtered = filtered.filter(t => t.completed);
  }
  return filtered;
}

// Sort Tasks
function sortTasks(list) {
  if (currentSort === 'priority') {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    list.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
  } else if (currentSort === 'date') {
    list.sort((a, b) => b.date - a.date);
  }
  return list;
}

// Render Tasks
function renderTasks() {
  taskList.innerHTML = "";
  let filtered = getFilteredTasks();
  filtered = sortTasks(filtered);

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;

    const span = document.createElement('span');
    span.textContent = task.text + (task.priority === 'high' ? ' ⚠️' : '');

    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  count.textContent = `Showing ${filtered.length} of ${tasks.length} tasks`;
  updateStats();
}

// Update Statistics
function updateStats() {
  const total = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalCount.textContent = total;
  activeCount.textContent = active;
  completedCount.textContent = completed;
  completionPercent.textContent = percent + "%";
}
