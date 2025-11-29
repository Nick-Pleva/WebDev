const app = document.getElementById('app');

app.innerHTML = `
    <video src="Media/fish.mp4" controls width="600" style="margin-bottom:20px;" class="start-box"></video>

    <form id="fishForm" class="start-box">
        <label for="yellowFish">How many yellow fish at 29 seconds?</label>
        <input type="number" id="yellowFish" required>
        <button type="submit">Submit</button>
    </form>

    <p id="result"></p>
`;

const form = document.getElementById('fishForm');
const resultDiv = document.getElementById('result');
const correctAnswer = 2;

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