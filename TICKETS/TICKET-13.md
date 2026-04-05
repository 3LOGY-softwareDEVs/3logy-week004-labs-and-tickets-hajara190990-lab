# TICKET-13: Animated Product Card Component

**Assigned:** Week 4 Monday  
**Due:** Week 4 Thursday, 9:00 AM  
**Points:** 12.5  
**Type:** Individual Task  
**Sprint:** Sprint 02 - Professional Portfolio Website

---

## 🎯 OBJECTIVE

Create an interactive product card component using CSS positioning, transitions, animations, and transforms.

---

## 📋 REQUIREMENTS

### Component Features:

1. **Card Structure**
   - Product image, title, description
   - Price display
   - "Add to Cart" button
   - Favorite icon (absolutely positioned)

2. **Hover Effects (Transitions)**
   - Card lifts up with box-shadow (0.3s)
   - Button changes color smoothly
   - Image scales slightly (1.05x)

3. **Animations**
   - Fade-in animation on page load
   - Price badge "pulse" animation

### Technical Requirements:

- [ ] External CSS file
- [ ] Absolute positioning for favorite icon
- [ ] Relative positioning for card
- [ ] Z-index for layering
- [ ] At least 3 transitions
- [ ] At least 2 @keyframes animations
- [ ] Responsive design

---

## ✅ ACCEPTANCE CRITERIA

- [ ] Card hovers smoothly
- [ ] Fade-in animation on load
- [ ] Price pulse animation works
- [ ] Icon positioned absolutely
- [ ] Works on mobile
- [ ] Professional appearance

---

## 📤 SUBMISSION

```
TICKET-13 Submission
Name: [Your Name]
GitHub: [Repository URL]
Screenshot: [Attach hover state]
Features: ✅ Positioning ✅ Transitions ✅ Animations
```

---

## 💡 TIPS & HINTS

**Card Hover:**
```css
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

**Fade-in Animation:**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

**Resources:**
- [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- Monday's demo files
- Lab 13 examples
