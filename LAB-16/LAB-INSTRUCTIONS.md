# LAB 16 - Notes App with LocalStorage

**Duration:** 60 minutes  
**Points:** 12.5  
**Due:** Thursday EOD (Week 4)  
**Focus:** Forms, LocalStorage, data persistence

---

## LEARNING OBJECTIVES

- Handle form submission  
- Validate user input  
- Store data in localStorage  
- Parse/stringify JSON  
- Load data on page load  

---

## PROJECT DESCRIPTION

Build a notes app where users can:
- Add new notes (title + content)
- View all saved notes
- Delete notes
- **Data persists after page reload!**

---

## REQUIREMENTS

### HTML (Provided)
- [ ] Form with title and content inputs
- [ ] Submit button
- [ ] Notes display area

### JavaScript (YOU BUILD)
- [ ] `addNote()` - saves note to localStorage
- [ ] `displayNotes()` - shows all notes
- [ ] `deleteNote(index)` - removes note
- [ ] `loadNotes()` - runs on page load
- [ ] Form validation (no empty fields)

---

## STARTER CODE

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lab 16 - Notes App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>My Notes</h1>
    
    <form id="noteForm">
      <input 
        type="text" 
        id="noteTitle" 
        placeholder="Note title..."
        required
      >
      <textarea 
        id="noteContent" 
        placeholder="Note content..."
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
    
    <div id="notesList">
      <!-- Notes will appear here -->
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

### JavaScript (script.js)
```javascript
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
  
  notes.forEach((note, index) => {
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
```

---

## CSS (styles.css)
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 12px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

form {
  margin-bottom: 30px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background: #5568d3;
}

.note {
  background: #f8f9fa;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 6px;
  position: relative;
}

.note h3 {
  color: #333;
  margin-bottom: 10px;
}

.note p {
  color: #666;
  margin-bottom: 10px;
}

.note small {
  color: #999;
  font-size: 12px;
}

.note button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #dc3545;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.note button:hover {
  background: #c82333;
}
```

---

## TESTING

- [ ] Can add notes
- [ ] Empty fields show alert
- [ ] Notes display correctly
- [ ] Can delete notes
- [ ] **Data persists after refresh!**
- [ ] No console errors

---

## SUBMISSION

```
LAB-16 Submission
Name: [Your Name]
GitHub: [Repository URL]
Features: ✅ Add ✅ Display ✅ Delete ✅ Persist
Screenshot: [Attach]
```

---

## GRADING

| Category | Points |
|----------|--------|
| Add note function | | 3.5 |
| Display notes | 3 |
| Delete note | 2.5 |
| LocalStorage save/load | 3 |
| Code quality | 0.5 |
| **TOTAL** | **12.5** |

---

## BONUS (+1 each)

1. **Edit note** - Double-click to edit
2. **Search notes** - Filter by keyword
3. **Categories** - Add tags/categories
4. **Export** - Download as JSON file

---

## KEY CONCEPTS

**Save to localStorage:**
```javascript
localStorage.setItem('notes', JSON.stringify(notes));
```

**Load from localStorage:**
```javascript
const saved = localStorage.getItem('notes');
if (saved) {
  notes = JSON.parse(saved);
}
```

**Why JSON.stringify/parse?**
localStorage only stores strings! Must convert arrays/objects to JSON strings.

---

## RESOURCES

- [MDN: LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- Today's demo files

---

**Build an app you'll actually use!** 📝
