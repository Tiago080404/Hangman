const inputField = document.getElementById("input-field");
const guessBtn = document.getElementById("guess-btn");
const score = document.getElementById("score");
const startBtn = document.getElementById("start-btn");
const gameWord = document.getElementById("game-word");
const fullbody = document.querySelector("body");
const wrongCharsDiv = document.getElementById("wrong-chars");
const totalWinsP = document.getElementById("total-wins");
const gameResult = document.getElementById("game-result");
const hangManImg = document.getElementById("hang-man");
const correctWord = document.getElementById("correct-word");

const allowedletters = /^[A-ZÄÖÜß\s]*$/;

let totalwins = Number(loadtotalwins());

if (saveWins !== 0) {
  saveWins(totalwins);
}

let guessedWord;
let wrongChars;
let secretWord;
let playerLife;

async function fetchWord() {
  return await fetch("https://random-word-api.herokuapp.com/word?lang=de")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      return response.json();
    })
    .then((data) => {
      data[0];
      console.log(data);
      return data[0].toUpperCase().split("");
    })
    .catch((error) => console.log(error));
}

async function startGame() {
  correctWord.textContent = "";
  hangManImg.src = "8.jpg";
  wrongCharsDiv.textContent = "";
  guessedWord = [];
  wrongChars = [];
  secretWord = await fetchWord();
  playerLife = 8;
  score.textContent = playerLife;
  guessBtn.disabled = false;
  gameResult.textContent = "";
  fullbody.style.background = "white";
  totalWinsP.textContent = "Your Total wins: " + totalwins;
  for (let i = 0; i < secretWord.length; i++) {
    if (secretWord[i] == " ") {
      guessedWord.push(" ");
    } else {
      guessedWord.push("_");
    }
  }
  displayWord();
}

function displayWord() {
  gameWord.textContent = "";

  for (let i = 0; i < guessedWord.length; i++) {
    const span = document.createElement("span");
    span.textContent = guessedWord[i];
    gameWord.appendChild(span);
  }
}

function checkGuess() {
  let value = inputField.value.toUpperCase();
  console.log(value);

  if (value.match(allowedletters)) {
    console.log("worked");
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord[i] === value) {
        console.log("h");
        guessedWord[i] = secretWord[i];
      }
    }
    if (!secretWord.includes(value) && !wrongChars.includes(value)) {
      wrongChars.push(value);
      console.log("doppelte" + wrongChars);
      wrongCharsDiv.textContent = "Bereits verwendet: " + wrongChars.sort();
      playerLife -= 1;
      hangManImg.src = `${playerLife}.png`;
      score.textContent = playerLife;
      checkLose();
    } else {
      console.log(guessedWord);
      checkWin();
      displayWord();
    }
  }
  inputField.value = "";
}

function checkWin() {
  if (guessedWord.toString() === secretWord.toString()) {
    gameResult.textContent = "You won";
    guessBtn.disabled = true;
    totalwins += 1;
    saveWins(totalwins);
    totalWinsP.textContent = "Your Total wins: " + totalwins;
    fullbody.style.background = "green";
  }
}

function checkLose() {
  if (playerLife == 0) {
    fullbody.style.backgroundColor = "red";
    gameResult.textContent = "You loose";
    guessBtn.disabled = true;
    correctWord.textContent = "The word was: " + secretWord.join("");
  }
}

function saveWins() {
  localStorage.setItem("Wins", totalwins);
}

function loadtotalwins() {
  return localStorage.getItem("Wins");
}

startGame();
startBtn.addEventListener("click", startGame);
