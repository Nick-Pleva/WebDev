const form = document.getElementById('fishForm');
const resultDiv = document.getElementById('result');
const correctAnswer = 5; // replace with the actual number of yellow fish

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userAnswer = parseInt(document.getElementById('yellowFish').value, 10);

  if (userAnswer === correctAnswer) {
    resultDiv.textContent = "Correct! 🐠";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = `Oops! The correct answer is ${correctAnswer}.`;
    resultDiv.style.color = "red";
  }
});