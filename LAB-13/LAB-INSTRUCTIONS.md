# LAB 13 - Interactive CSS Components

**Duration:** 60 minutes  
**Points:** 12.5  
**Due:** Monday EOD (Week 4)  
**Focus:** Advanced CSS with positioning, transitions, animations

---

## 🎯 LEARNING OBJECTIVES

By completing this lab, you will:
- Apply CSS positioning to create layered layouts
- Use transitions for smooth hover effects
- Create keyframe animations
- Use transform for performance-optimized animations
- Build professional interactive components

---

## 📋 PROJECT DESCRIPTION

Build a page with THREE interactive CSS components demonstrating advanced techniques learned today.

**Required Components:**
1. **Animated Button** - Hover effects with transitions
2. **Card Flip Component** - 3D flip animation on hover
3. **Dropdown/Modal** - Interactive reveal with positioning

---

## ✅ REQUIREMENTS

### Component 1: Animated Button (Required)

Create a button with professional hover and active states:

**Must include:**
- [ ] Smooth color transition on hover
- [ ] `transform: translateY()` lift effect
- [ ] Box-shadow that increases on hover
- [ ] Active state (pressed down effect)
- [ ] Transition duration: 0.3s

**Example CSS:**
```css
.btn {
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn:active {
  transform: translateY(0);
}
```

---

### Component 2: Card Flip (Required)

Create a card that flips to reveal back content on hover:

**Must include:**
- [ ] Front and back sides (use `div` for each)
- [ ] 3D flip animation (`rotateY(180deg)`)
- [ ] `perspective` on container
- [ ] `backface-visibility: hidden` on faces
- [ ] Transition duration: 0.6s
- [ ] Meaningful content on front and back

**Example Structure:**
```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Front Side</h3>
      <p>Hover to flip!</p>
    </div>
    <div class="flip-card-back">
      <h3>Back Side</h3>
      <p>Hidden content revealed!</p>
    </div>
  </div>
</div>
```

**Example CSS:**
```css
.flip-card {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
```

---

### Component 3: Dropdown Menu OR Modal (Choose One)

**Option A: Dropdown Menu**

Create a menu that expands on hover:

- [ ] Menu header (visible always)
- [ ] Hidden menu items (revealed on hover)
- [ ] Smooth `max-height` or `opacity` transition
- [ ] At least 4 menu items
- [ ] Hover states on menu items

**Example:**
```css
.menu {
  max-height: 60px;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.menu:hover {
  max-height: 300px;
}
```

**Option B: Modal Overlay**

Create a modal that opens with a button click:

- [ ] Button to trigger modal
- [ ] Fixed overlay (full screen, semi-transparent)
- [ ] Centered modal content
- [ ] Close button (× symbol)
- [ ] Entrance animation (slide in or fade in)
- [ ] JavaScript to add/remove `active` class

**Example JavaScript:**
```javascript
function openModal() {
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}
```

---

## 🎨 DESIGN REQUIREMENTS

### General Styling:
- [ ] Professional color scheme (not default browser colors)
- [ ] All components clearly labeled (headings)
- [ ] Page background not pure white (#f4f4f4 recommended)
- [ ] Adequate spacing between components
- [ ] Consistent border-radius (4-8px)

### Code Quality:
- [ ] CSS organized with comments
- [ ] Proper indentation
- [ ] No inline styles
- [ ] External CSS file linked
- [ ] Semantic HTML structure

---

## 📝 STARTER CODE

### HTML Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lab 13 - Interactive Components</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Interactive CSS Components</h1>
    
    <!-- Component 1: Animated Button -->
    <section class="component">
      <h2>Component 1: Animated Button</h2>
      <button class="btn">Hover Me!</button>
      <button class="btn btn-secondary">Another Button</button>
    </section>
    
    <!-- Component 2: Card Flip -->
    <section class="component">
      <h2>Component 2: Card Flip</h2>
      <div class="flip-card">
        <!-- TODO: Add flip card structure -->
      </div>
    </section>
    
    <!-- Component 3: Dropdown or Modal -->
    <section class="component">
      <h2>Component 3: Dropdown/Modal</h2>
      <!-- TODO: Add your chosen component -->
    </section>
  </div>
  
  <script src="script.js"></script> <!-- If using modal -->
</body>
</html>
```

### CSS Starter:
```css
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f4f4f4;
  padding: 20px;
  line-height: 1.6;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

.component {
  margin: 40px 0;
  padding: 30px;
  background: #ecf0f1;
  border-radius: 8px;
}

.component h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

/* TODO: Add component styles below */

/* Component 1: Animated Button */


/* Component 2: Card Flip */


/* Component 3: Dropdown/Modal */

```

---

## 🧪 TESTING CHECKLIST

Before submitting:
- [ ] All 3 components work correctly
- [ ] Button: hovers smoothly, presses down on click
- [ ] Card: flips cleanly on hover, no glitches
- [ ] Dropdown/Modal: opens and closes smoothly
- [ ] No console errors (F12 → Console)
- [ ] Tested in Chrome and Firefox
- [ ] Code is well-organized and commented

---

## 📤 SUBMISSION

**Submit to Discord #assignments channel:**

1. **GitHub Repository Link**
   - Lab 13 files pushed to your repo

2. **Screenshots**
   - Screenshot of all 3 components
   - GIF of card flip animation (optional but encouraged!)

3. **Submission Message:**
```
LAB-13 Submission
Name: [Your Name]
GitHub: [URL]
Components: ✅ Button ✅ Card Flip ✅ Dropdown/Modal
Screenshots: [Attach]
```

**GitHub Commit:**
```bash
git add .
git commit -m "Complete Lab 13: Interactive CSS Components"
git push origin main
```

---

## 📊 GRADING RUBRIC

| Category | Points | Criteria |
|----------|--------|----------|
| **Component 1: Button** | 3 | Smooth transitions, hover+active states, professional |
| **Component 2: Card Flip** | 4 | 3D flip works, backface hidden, meaningful content |
| **Component 3: Dropdown/Modal** | 3.5 | Functions correctly, smooth animation, positioned properly |
| **Code Quality** | 2 | Organized CSS, comments, semantic HTML, no errors |
| **TOTAL** | **12.5** | |

---

## 💡 TIPS & HINTS

### Debugging Transform Issues:
```
Problem: Card flip doesn't work
Solution: Check parent has perspective: 1000px
Check backface-visibility: hidden on both sides
```

### Smooth Transitions:
```
Use ease-out for most UI interactions (feels responsive)
Duration: 0.2-0.3s for buttons, 0.5-0.6s for larger movements
```

### Z-Index Problems:
```
Remember: z-index only works on positioned elements!
Add position: relative if z-index isn't working
```

### Performance:
```
Animate transform and opacity (GPU accelerated)
Avoid animating width, height, margin (slow!)
```

---

## 🏆 BONUS CHALLENGES (+1 point each)

**Bonus 1: Loading Spinner**
- Create CSS-only loading spinner
- Use `@keyframes` with `rotate(360deg)`
- Infinite animation

**Bonus 2: Multi-Button Variations**
- Create 3 button styles: primary, success, danger
- Different colors but same hover behavior
- Use CSS classes

**Bonus 3: Advanced Modal**
- Add entrance animation (slide from top + fade in)
- Close on overlay click
- Close on ESC key press

**Bonus 4: Staggered Animations**
- Multiple cards that animate in sequence
- Use `animation-delay` to stagger
- Fade in + slide up effect

---

## ❓ FREQUENTLY ASKED QUESTIONS

**Q: Can I use JavaScript for the dropdown?**  
A: For dropdown, CSS-only is preferred (`:hover`). Modal requires JavaScript for click events.

**Q: My card flip shows both sides at once!**  
A: Add `backface-visibility: hidden;` to both `.flip-card-front` and `.flip-card-back`.

**Q: Which component is hardest?**  
A: Card flip is trickiest (3D transforms). Start with button, then dropdown/modal, then card flip.

**Q: Can I use external images?**  
A: Yes! Add images to card fronts/backs for better visual appeal.

**Q: How do I make a GIF of my animation?**  
A: Use ScreenToGif (Windows), Kap (Mac), or Chrome extension "Screencastify".

---

## 📚 RESOURCES

- [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS-Tricks: 3D Card Flip](https://3dtransforms.desandro.com/card-flip)
- [W3Schools: CSS Transform](https://www.w3schools.com/cssref/css3_pr_transform.asp)
- Today's demos (demo-01 through demo-06)

---

**Build components you'd be proud to put in your portfolio!** ✨
