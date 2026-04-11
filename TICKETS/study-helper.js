let studyCards = [];
let quizCards = [];
let currentCard = null;

// Safe Load Pattern
function loadCards() {
  const saved = localStorage.getItem('studyCards');
  if (saved) {
    studyCards = JSON.parse(saved);
  } else {
    studyCards = [];
  }
}
function saveCards() {
  localStorage.setItem('studyCards', JSON.stringify(studyCards));
}

// DOM Elements
const termInput = document.getElementById('termInput');
const defInput = document.getElementById('defInput');
const addCardBtn = document.getElementById('addCardBtn');
const cardList = document.getElementById('cardList');
const startQuizBtn = document.getElementById('startQuizBtn');
const quizArea = document.getElementById('quizArea');
const quizTerm = document.getElementById('quizTerm');
const quizDefinition = document.getElementById('quizDefinition');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const gotItBtn = document.getElementById('gotItBtn');
const needReviewBtn = document.getElementById('needReviewBtn');
const totalCount = document.getElementById('totalCount');
const masteredCount = document.getElementById('masteredCount');
const completionPercent = document.getElementById('completionPercent');
const progressFill = document.getElementById('progressFill');

// Add Card
addCardBtn.addEventListener('click', () => {
  const term = termInput.value.trim();
  const definition = defInput.value.trim();
  if (!term || !definition) {
    alert("Please enter both term and definition");
    return;
  }
  const card = {
    id: Date.now(),
    term,
    definition,
    mastered: false,
    reviewCount: 0
  };
  studyCards.push(card);
  termInput.value = "";
  defInput.value = "";
  saveCards();
  renderCards();
  updateStats();
});

// Render Cards
function renderCards() {
  cardList.innerHTML = "";
  studyCards.forEach(card => {
    const li = document.createElement('li');
    li.className = `card-item ${card.mastered ? 'mastered' : ''}`;
    li.dataset.id = card.id;

    const span = document.createElement('span');
    span.textContent = `${card.term}: ${card.definition} (Reviews: ${card.reviewCount})`;

    const delBtn = document.createElement('button');
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.addEventListener('click', () => {
      studyCards = studyCards.filter(c => c.id != card.id);
      saveCards();
      renderCards();
      updateStats();
    });

    const masterBtn = document.createElement('button');
    masterBtn.textContent = card.mastered ? "Unmaster" : "Mastered";
    masterBtn.addEventListener('click', () => {
      card.mastered = !card.mastered;
      saveCards();
      renderCards();
      updateStats();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(masterBtn);
    cardList.appendChild(li);
  });
}

// Quiz Mode
startQuizBtn.addEventListener('click', () => {
  quizCards = studyCards.filter(c => !c.mastered);
  if (quizCards.length === 0) {
    alert("No cards to review!");
    return;
  }
  quizArea.classList.remove('hidden');
  showRandomCard();
});

function showRandomCard() {
  const randomIndex = Math.floor(Math.random() * quizCards.length);
  currentCard = quizCards[randomIndex];
  quizTerm.textContent = currentCard.term;
  quizDefinition.textContent = currentCard.definition;
  quizDefinition.classList.add('hidden');
}

showAnswerBtn.addEventListener('click', () => {
  quizDefinition.classList.remove('hidden');
});

gotItBtn.addEventListener('click', () => {
  currentCard.mastered = true;
  saveCards();
  updateStats();
  quizCards = quizCards.filter(c => !c.mastered);
  if (quizCards.length === 0) {
    alert("Quiz complete!");
    quizArea.classList.add('hidden');
  } else {
    showRandomCard();
  }
});

needReviewBtn.addEventListener('click', () => {
  currentCard.reviewCount++;
  saveCards();
  renderCards();
  updateStats();
  showRandomCard();
});

// Statistics
function updateStats() {
  const total = studyCards.length;
  const mastered = studyCards.filter(c => c.mastered).length;
  const percent = total === 0 ? 0 : Math.round((mastered / total) * 100);

  totalCount.textContent = total;
  masteredCount.textContent = mastered;
  completionPercent.textContent = percent + "%";
  progressFill.style.width = percent + "%";
}

// Initialize
loadCards();
renderCards();
updateStats();
