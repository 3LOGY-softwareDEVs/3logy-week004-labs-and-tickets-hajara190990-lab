# TICKET-16: Study Helper with LocalStorage

**Assigned:** Week 4 Thursday  
**Due:** Week 5 Monday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Build a study helper app with flashcards, quiz mode, progress tracking, and localStorage persistence.

---

## 📋 REQUIREMENTS

### 1. Study Card Management

- [ ] Add cards (term + definition)
- [ ] View all cards
- [ ] Delete cards
- [ ] Mark cards as "mastered"

### 2. Quiz Mode

- [ ] "Start Quiz" button
- [ ] Display random card (show term, hide definition)
- [ ] "Show Answer" button
- [ ] Mark as "Got it" or "Need review"
- [ ] Quiz only shows non-mastered cards

### 3. Progress Tracking

- [ ] Total cards count
- [ ] Mastered cards count
- [ ] Progress bar (% mastered)
- [ ] Review count per card

### 4. Data Persistence

- [ ] Save to localStorage
- [ ] Load on page load
- [ ] Data persists after refresh

### Technical Requirements:

- [ ] Cards: `{id, term, definition, mastered, reviewCount}`
- [ ] Use JSON.stringify() to save
- [ ] Use JSON.parse() to load
- [ ] Handle null localStorage
- [ ] Random card selection
- [ ] All DOM uses createElement

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Can add/delete study cards
- [ ] Quiz mode works (random cards)
- [ ] "Got it" removes from quiz
- [ ] "Need review" keeps in quiz
- [ ] Progress bar updates
- [ ] **Data persists after refresh!**
- [ ] No data loss or errors

---

## 📤 SUBMISSION

```
TICKET-16 Submission
Name: [Your Name]
GitHub: [URL]
Screenshot: [Show cards list + quiz mode]
Testing: ✅ Refreshed page - data persists
Features: ✅ Cards ✅ Quiz ✅ Progress ✅ LocalStorage
```

---

## 💡 TIPS & HINTS

**Safe Load Pattern:**
```javascript
function loadCards() {
  const saved = localStorage.getItem('studyCards');
  
  if (saved) {
    studyCards = JSON.parse(saved);
  } else {
    studyCards = [];
  }
}
```

**Random Card:**
```javascript
const randomIndex = Math.floor(Math.random() * quizCards.length);
const randomCard = quizCards[randomIndex];
```

**Progress Bar:**
```javascript
const percent = total === 0 ? 0 : Math.round((mastered / total) * 100);
progressFill.style.width = percent + '%';
```

**Resources:**
- [MDN: LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- Thursday's demos
- Lab 16 Notes App
