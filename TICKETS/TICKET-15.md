# TICKET-15: Interactive Task Dashboard

**Assigned:** Week 4 Wednesday  
**Due:** Week 4 Thursday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Build an enhanced task dashboard with filtering, priority levels, sorting, and live statistics.

---

## 📋 REQUIREMENTS

### Core (from Lab 15):

- [ ] Add/complete/delete tasks
- [ ] Tasks persist in array

### Enhancements:

**1. Priority Levels**
- [ ] Low, Medium, High priority
- [ ] Dropdown to select priority
- [ ] Color-coded visual indicators
- [ ] High priority shows ⚠️ icon

**2. Filter & Sort**
- [ ] Filter: All | Active | Completed
- [ ] Sort: By Priority | By Date
- [ ] Count: "Showing 3 of 5 tasks"

**3. Statistics Dashboard**
- [ ] Total tasks count
- [ ] Active tasks count
- [ ] Completed tasks count
- [ ] Completion percentage
- [ ] Updates in real-time

### Technical Requirements:

- [ ] Tasks array of objects: `{id, text, completed, priority, date}`
- [ ] Use array methods (filter, sort)
- [ ] Use createElement (not innerHTML for tasks)
- [ ] Use classList and dataset
- [ ] Event delegation

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Can add tasks with priority
- [ ] Filters work (All/Active/Completed)
- [ ] Sort by priority and date works
- [ ] Statistics update in real-time
- [ ] Color-coded priorities
- [ ] Clean, organized code

---

## 📤 SUBMISSION

```
TICKET-15 Submission
Name: [Your Name]
GitHub: [URL]
Screenshot: [Show dashboard with tasks, filters, stats]
Features: ✅ Priorities ✅ Filters ✅ Sort ✅ Stats
```

---

## 💡 TIPS & HINTS

**Priority Color Coding:**
```css
.priority-low { border-left: 4px solid #28a745; }
.priority-medium { border-left: 4px solid #ffc107; }
.priority-high { border-left: 4px solid #dc3545; }
```

**Filter Function:**
```javascript
function getFilteredTasks() {
  let filtered = tasks;
  
  if (currentFilter === 'active') {
    filtered = filtered.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filtered = filtered.filter(t => t.completed);
  }
  
  return filtered;
}
```

**Resources:**
- [MDN: Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- Wednesday's demos
- Lab 15 code
