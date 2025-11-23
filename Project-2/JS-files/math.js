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

// -------- ROUND 1 --------
function loadRound1() {
    app.innerHTML = `
        <h2 style="color: white;">MATH QUIZ: ROUND 1</h2>
        <div class="score-row">
            <div class="score-box1" id="score1">Game Master: ${gameData.gameMaster.score}</div>
            <div class="score-box2" id="score2">Player 1: ${gameData.players.player1.score}</div>
        </div>
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

function checkRound1() {
    const a = Number(document.getElementById("q1").value);
    const b = Number(document.getElementById("q2").value);
    const c = Number(document.getElementById("q3").value);
    const correct = (a === 2 && b === 3 && c === 7);

    if (!correct) {
        gameOver();
        return;
    }

    loadContinueScreen(loadRound2, "✅ Great start! Get ready for multiplication & division.", "Continue");
}

// -------- ROUND 2 --------
function loadRound2() {
    app.innerHTML = `
        <h2 style="color: white;">MATH QUIZ: ROUND 2</h2>
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

function checkRound2() {
    const a = Number(document.getElementById("q4").value);
    const b = Number(document.getElementById("q5").value);
    const c = Number(document.getElementById("q6").value);
    const correct = (a === 9 && b === 3 && c === 12);

    if (!correct) {
        gameOver();
        return;
    }

    loadContinueScreen(loadRound3, "🔥 Nice! Now try the final mixed round.", "Continue");
}

// -------- ROUND 3 --------
function loadRound3() {
    app.innerHTML = `
        <h2 style="color: white;">MATH QUIZ: ROUND 3</h2>
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
    }, "Hmm, I'd say you passed the math challenge.", "On to the next challenge");
}

// -------- CONTINUE SCREEN --------
function loadContinueScreen(next, message, button_text) {
    app.innerHTML = `
        <div>
            <p style="color:white;">${message}</p>
            <button id="continueBtn">${button_text}</button>
        </div>
    `;
    document.getElementById("continueBtn").onclick = next;
}

// -------- GAME OVER --------
function gameOver() {
    app.innerHTML = `
        <div>
            <p style="color:red;">Incorrect! You lost.</p>
            <button id="gameOverBtn">Go to Game Over</button>
        </div>
    `;
    document.getElementById("gameOverBtn").onclick = () => {
        window.location.href = "gameover.html";
    };
}

// -------- START QUIZ --------
loadRound1();