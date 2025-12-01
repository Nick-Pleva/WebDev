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
    const inputField = document.getElementById('yellowFish');
    const userAnswer = parseInt(inputField.value, 10);

    // Validate input is a number
    if (isNaN(userAnswer)) {
        alert("Please enter a valid number!");
        return;
    }

    // Validate input is positive
    if (userAnswer <= 0) {
        alert("Please enter a positive number!");
        return;
    }

    document.getElementById('intro-box').remove();

    if (userAnswer === correctAnswer) {
        // Correct and continue
        app.innerHTML = `
            <p class="start-box" style="color: white;">Thanks for keeping count of them!<br>Now that they are eating let me show you the prize room!</p>
            <button id="continueBtn" style="display:block; margin:20px auto;">Continue</button>
        `;

        document.getElementById('continueBtn').addEventListener('click', () => {
            window.location.href = "win.html";
        });

    } else {
        // Incorrect and continue
        app.innerHTML = `
            <p class="start-box" style="color: white;">Oh no! My fish all swam away!<br>Sorry prize seeker, Im going to have to go find them instea of showing you the prize room.</p>
            <button id="continueBtn" style="display:block; margin:20px auto;">Continue</button>
        `;

        document.getElementById('continueBtn').addEventListener('click', () => {
            window.location.href = "gameover.html";
        });
    }
});