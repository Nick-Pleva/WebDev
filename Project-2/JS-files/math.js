const app = document.getElementById("app");

// Initialize game data
let gameData = JSON.parse(localStorage.getItem("gameData"));
if (!gameData) {
    gameData = {
        gameMaster: { score: 0 },
        players: { player1: { score: 0 } }
    };
    localStorage.setItem("gameData", JSON.stringify(gameData));
}

// Functions for each round
function loadRound1() {
    app.innerHTML = `
        <h2 style="color: white;">MATH QUIZ</h2>
        <p class="start-box" style="color: white; text-align: center;">Well well well....<br>You think you are worhty of the great prize....<br>Ill be the judge of that...</p>
        <form id="form1">
            <p>Round 1: Addition & Subtraction</p>
            <label>1 + 1 = </label>
            <input type="number" id="q1">
            <label>5 - 2 = </label>
            <input type="number" id="q2">
            <label>3 + 4 = </label>
            <input type="number" id="q3">
            <button type="submit">Submit</button>
        </form>
    `;
    document.getElementById("form1").addEventListener("submit", e => {
        e.preventDefault();
        checkRound1();
    });
}

function loadRound2() {
    app.innerHTML = `
        <h2 style="color: white;">MATH QUIZ</h2>
        <form id="form2">
            <p>Round 2: Multiplication & Division</p>
            <label>3 × 3 = </label>
            <input type="number" id="q4">
            <label>12 ÷ 4 = </label>
            <input type="number" id="q5">
            <label>6 × 2 = </label>
            <input type="number" id="q6">
            <button type="submit">Submit</button>
        </form>
    `;
    document.getElementById("form2").addEventListener("submit", e => {
        e.preventDefault();
        checkRound2();
    });
}

function loadRound3() {
    app.innerHTML = `
        <h2 style="color: white;">MATH QUIZ</h2>
        <form id="form3">
            <p>Round 3: Mixed Questions</p>
            <label>4 + ((50 - 26) ÷ 6) = </label>
            <input type="number" id="q7">
            <label>((11 × 9) - 4) ÷ 5 = </label>
            <input type="number" id="q8">
            <label>(1000000 ÷ 8000) - 124 = </label>
            <input type="number" id="q9">
            <button type="submit">Submit</button>
        </form>
    `;
    document.getElementById("form3").addEventListener("submit", e => {
        e.preventDefault();
        checkRound3();
    });
}

// Checks for round
function checkRound1() {
    const a = Number(document.getElementById("q1").value);
    const b = Number(document.getElementById("q2").value);
    const c = Number(document.getElementById("q3").value);
    const correct = (a === 2 && b === 3 && c === 7);

    if (!correct) {
        gameOver();
        return;
    }

    loadContinueScreen(loadRound2, "Ok, you can add and subtract....<br>But how about multiplication & division....", "Continue");
}

function checkRound2() {
    const a = Number(document.getElementById("q4").value);
    const b = Number(document.getElementById("q5").value);
    const c = Number(document.getElementById("q6").value);
    const correct = (a === 9 && b === 3 && c === 12);

    if (!correct) {
        gameOver();
        return;
    }

    loadContinueScreen(loadRound3, "Alright....<br>You think you are so smart....<br>Try doing it all at once....", "Continue");
}

function checkRound3() {
    const a = Number(document.getElementById("q7").value);
    const b = Number(document.getElementById("q8").value);
    const c = Number(document.getElementById("q9").value);

    const correct = (a === 8 && b === 19 && c === 1);

    if (!correct) {
        gameOver();
        return;
    }

    // Show continue screen for Round 3
    loadContinueScreen(() => {
        window.location.href = "riddles.html";
    }, "Hmm....<br>I suppose you might be worthy of th great prize....<br>You have passed my math challenge....", "On to the next challenge");
}

// Continue Screen
function loadContinueScreen(next, message, button_text) {
    app.innerHTML = `
        <div class="start-box">
            <p style="color:white;">${message}</p>
            <button id="continueBtn" style="align-items: center;">${button_text}</button>
        </div>
    `;
    document.getElementById("continueBtn").onclick = next;
}

// Game over
function gameOver() {
    app.innerHTML = `
        <div class="start-box">
            <p style="color:red;">Just as I thought....<br>You are not worthy of the great prize....<br>You lost.</p>
            <button id="gameOverBtn">Go to Game Over</button>
        </div>
    `;
    document.getElementById("gameOverBtn").onclick = () => {
        window.location.href = "gameover.html";
    };
}

// Start Quiz
loadRound1();