const container = document.getElementById('game-container');
const beforeText = document.getElementById('beforeText'); 
let riddles = [];
let selectedRiddles = [];
let currentIndex = 0;

// Success messages
const successMessages = [
  "Oh what fun! You guessed one!",
  "Yahoo! That is two!",
  "Yippie! You solved all three!"
];

// Incorrect message
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
  beforeText.innerHTML = "Welcome traveler!<br>Before the prize you can see, you must answer my riddles three!";

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
  if (currentIndex > 0) beforeText.textContent = "";

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

  // Remove intro text only when answering the first riddle
  if (currentIndex === 0) {
    beforeText.remove();
  }

  const answerValue = inputField.value.trim();

  // Validate: at least 3 characters
  if (answerValue.length < 3) {
    alert('Answer must be at least 3 characters long!');
    return;
  }

  // Validate: no numbers
  if (/\d/.test(answerValue)) {
    alert('Answer cannot contain numbers!');
    return;
  }

  const userAnswer = answerValue.toLowerCase();
  const correctAnswer = selectedRiddles[currentIndex].answer.trim().toLowerCase();

  if (userAnswer === correctAnswer) {
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
        beforeText.textContent = ""; 
        container.innerHTML = `
          <p>I am not surprised!<br>I saw the knowledge of riddles in your eyes!<br>Now continue on to claim your prize!</p>
          <button id="finalBtn">On to the final game</button>
        `;
        document.getElementById('finalBtn').addEventListener('click', () => {
          window.location.href = 'fish.html';
        });
      }
    });
  } else {
    // Incorrect message
    container.innerHTML = `
      <p>${incorrectMessage}</p>
      <button id="gameoverBtn">Game Over</button>
    `;
    document.getElementById('gameoverBtn').addEventListener('click', () => {
      window.location.href = 'gameover.html';
    });
  }
}