const container = document.getElementById('game-container');
let riddles = [];
let selectedRiddles = [];
let currentIndex = 0;

// Success messages per correct answer position
const successMessages = [
  "Good job! First riddle correct!",
  "Great! Second riddle correct!",
  "Awesome! Third riddle correct!"
];

// Generic incorrect message
const incorrectMessage = "Incorrect answer!";

fetch('JSON-files/riddles.json')
  .then(response => response.json())
  .then(data => {
    riddles = data.riddles;
    startGame();
  })
  .catch(err => {
    container.innerHTML = "<p>Failed to load riddles.</p>";
    console.error(err);
  });

function startGame() {
  // Pick 3 random riddles
  selectedRiddles = [];
  const usedIndices = new Set();
  while (selectedRiddles.length < 3) {
    const idx = Math.floor(Math.random() * riddles.length);
    if (!usedIndices.has(idx)) {
      selectedRiddles.push(riddles[idx]);
      usedIndices.add(idx);
    }
  }
  currentIndex = 0;
  showRiddle();
}

function showRiddle() {
  const riddle = selectedRiddles[currentIndex];
  container.innerHTML = `
    <p>${riddle.question}</p>
    <input type="text" id="answerInput" placeholder="Your answer" required />
    <br><br>
    <button id="submitBtn">Submit</button>
  `;

  const submitBtn = document.getElementById('submitBtn');
  const answerInput = document.getElementById('answerInput');

  submitBtn.addEventListener('click', checkAnswer);
  answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkAnswer();
  });
}

function checkAnswer() {
  const inputField = document.getElementById('answerInput');

  if (!inputField.value.trim()) {
    alert('Please enter an answer!');
    return;
  }

  const userAnswer = inputField.value.trim().toLowerCase();
  const correctAnswer = selectedRiddles[currentIndex].answer.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
    // Show generic success message based on order of correct answer
    container.innerHTML = `
      <p>${successMessages[currentIndex]}</p>
      <button id="nextBtn">Next</button>
    `;
    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex++;
      if (currentIndex < selectedRiddles.length) {
        showRiddle();
      } else {
        // All 3 riddles correct
        container.innerHTML = `
          <p>Congratulations! You answered all riddles correctly!</p>
          <button id="finalBtn">On to the final game</button>
        `;
        document.getElementById('finalBtn').addEventListener('click', () => {
          window.location.href = 'next.html';
        });
      }
    });
  } else {
    // Show incorrect message and button to game over
    container.innerHTML = `
      <p>${incorrectMessage}</p>
      <button id="gameoverBtn">Game Over</button>
    `;
    document.getElementById('gameoverBtn').addEventListener('click', () => {
      window.location.href = 'gameover.html';
    });
  }
}
