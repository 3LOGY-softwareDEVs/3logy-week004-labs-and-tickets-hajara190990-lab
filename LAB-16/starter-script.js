const noteForm = document.getElementById('noteForm');
const noteTitle = document.getElementById('noteTitle');
const noteContent = document.getElementById('noteContent');
const notesList = document.getElementById('notesList');

let notes = [];  // Array to store notes

// Load notes on page load
window.addEventListener('load', function() {
  loadNotes();
  displayNotes();
});

// Handle form submit
noteForm.addEventListener('submit', function(e) {
  e.preventDefault();  // Stop page reload
  addNote();
});

// Add note function
function addNote() {
  const title = noteTitle.value.trim();
  const content = noteContent.value.trim();
  
  // Validate
  if (title === '' || content === '') {
    alert('Please fill in both fields!');
    return;
  }
  
  // Create note object
  const note = {
    title: title,
    content: content,
    date: new Date().toLocaleDateString()
  };
  
  // Add to array
  notes.push(note);
  
  // Save to localStorage
  saveNotes();
  
  // Display notes
  displayNotes();
  
  // Clear form
  noteForm.reset();
}

// Save notes to localStorage
function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes from localStorage
function loadNotes() {
  const saved = localStorage.getItem('notes');
  
  if (saved) {
    notes = JSON.parse(saved);
  }
}

// Display all notes
function displayNotes() {
  notesList.innerHTML = '';  // Clear existing
  
  notes.forEach(function(note, index) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    
    noteDiv.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <small>${note.date}</small>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    
    notesList.appendChild(noteDiv);
  });
}

// Delete note
function deleteNote(index) {
  notes.splice(index, 1);  // Remove from array
  saveNotes();  // Update localStorage
  displayNotes();  // Refresh display
}
