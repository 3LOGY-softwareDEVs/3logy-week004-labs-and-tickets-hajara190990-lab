let notes = JSON.parse(localStorage.getItem('notes')) || [];
let currentNoteId = null;

const notesList = document.getElementById('notes-list');
const noteForm = document.getElementById('note-form');
const titleInput = document.getElementById('note-title');
const contentInput = document.getElementById('note-content');
const newNoteBtn = document.getElementById('new-note');
const deleteNoteBtn = document.getElementById('delete-note');
const noteCount = document.getElementById('note-count');

// Render notes list in sidebar
function renderNotesList() {
  notesList.innerHTML = '';
  
  notes.forEach(function(note) {
    const li = document.createElement('li');
    li.className = currentNoteId === note.id ? 'active' : '';
    li.innerHTML = `
      <h3>${note.title || 'Untitled'}</h3>
      <small>${new Date(note.modified).toLocaleDateString()}</small>
    `;
    li.addEventListener('click', function() {
      loadNote(note.id);
    });
    notesList.appendChild(li);
  });
  
  noteCount.textContent = notes.length + ' note' + (notes.length !== 1 ? 's' : '');
}

// Load note into editor
function loadNote(id) {
  const note = notes.find(function(n) {
    return n.id === id;
  });
  
  if (note) {
    currentNoteId = id;
    titleInput.value = note.title;
    contentInput.value = note.content;
    renderNotesList();
  }
}

// Save note (create or update)
noteForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  
  if (title === '' || content === '') {
    alert('Please fill in both title and content!');
    return;
  }
  
  if (currentNoteId) {
    // Update existing note
    const note = notes.find(function(n) {
      return n.id === currentNoteId;
    });
    
    if (note) {
      note.title = title;
      note.content = content;
      note.modified = Date.now();
    }
  } else {
    // Create new note
    notes.push({
      id: Date.now(),
      title: title,
      content: content,
      created: Date.now(),
      modified: Date.now()
    });
    currentNoteId = notes[notes.length - 1].id;
  }
  
  saveNotes();
  renderNotesList();
});

// New note button
newNoteBtn.addEventListener('click', function() {
  currentNoteId = null;
  titleInput.value = '';
  contentInput.value = '';
  titleInput.focus();
  renderNotesList();
});

// Delete note button
deleteNoteBtn.addEventListener('click', function() {
  if (currentNoteId && confirm('Delete this note?')) {
    notes = notes.filter(function(n) {
      return n.id !== currentNoteId;
    });
    
    currentNoteId = null;
    titleInput.value = '';
    contentInput.value = '';
    
    saveNotes();
    renderNotesList();
    
    // Load first note if any remain
    if (notes.length > 0) {
      loadNote(notes[0].id);
    }
  }
});

// Save to localStorage
function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Initialize
renderNotesList();
if (notes.length > 0) {
  loadNote(notes[0].id);
}
