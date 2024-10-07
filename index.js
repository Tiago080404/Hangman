let inputField = document.getElementById("inputfield");
let guessBtn = document.getElementById("submitbtn");
let score = document.getElementById("showscore");
let clearBtn = document.getElementById("clearbtn");
let guessStrich = document.getElementById("guessstriche");
let gameDiv = document.getElementById("div1");
let fullbody = document.querySelector("body");
let wrongwords = document.getElementById("wrongarray");
let ptotalwins = document.getElementById("totalwins");
let gameresult = document.getElementById("gamresult");
let imgHang = document.getElementById("hangimage");
let showWord = document.getElementById("showWord");

gameresult.style.display = "flex";
gameresult.style.justifyContent = "center";

let allowedletters = /^[A-Za-zäöüß\s]*$/;

let totalwins = Number(loadtotalwins());

if (saveWins !== 0) {
  saveWins(totalwins);
}

let word;
let guessedWord;
let doppelteWords;
let newString;
let newWord;
let playerLeben;

async function startGame() {
  word = await fetch("https://random-word-api.herokuapp.com/word?lang=de")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      return response.json();
    })
    .then((data) => {
      data[0];
      console.log(data);
      return data[0];
    })
    .catch((error) => console.log(error));
  initiliazeGame();
}

function initiliazeGame() {
  //word = "data";
  imgHang.src = "8.jpg";
  wrongwords.textContent = "";
  guessedWord = [];
  doppelteWords = [];
  newString = word.toUpperCase(); //changed
  newWord = newString.split("");
  playerLeben = 8;
  score.textContent = playerLeben;
  guessBtn.disabled = false;
  gameresult.textContent = "";
  fullbody.style.background = "white";
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] == " ") {
      guessedWord.push(" ");
    } else {
      guessedWord.push("_");
    }
  }
  displayWord();
}
ptotalwins.textContent = "Your Total wins: " + totalwins;

function displayWord() {
  gameDiv.textContent = "";

  for (let i = 0; i < guessedWord.length; i++) {
    let textStriche = document.createElement("span");
    textStriche.textContent = guessedWord[i];
    textStriche.style.margin = "5px";
    gameDiv.appendChild(textStriche);
  }
}

function checkWords() {
  let value = inputField.value;
  value = value.toUpperCase();
  console.log(value.toUpperCase());

  if (inputField.value.match(allowedletters)) {
    console.log("worked");
    if (!newWord.includes(value) || doppelteWords.includes(value)) {
      //changes that does not work
      if (doppelteWords.includes(value)) {
        console.log("already tried");
      } else {
        doppelteWords.push(value);
        console.log("doppelte" + doppelteWords);
        wrongwords.textContent = "Bereits verwendet: " + doppelteWords.sort();
        playerLeben -= 1;
        let imgname = playerLeben + ".jpg";
        imgHang.src = imgname;
        score.textContent = playerLeben;
        checkloose();
      }
    } else {
      for (let i = 0; i < newWord.length; i++) {
        if (newWord[i] === value) {
          console.log("h");
          guessedWord[i] = newWord[i];
        }
      }

      console.log(guessedWord);
      checkWin(guessedWord);
      displayWord();
    }
  }
  inputField.value = "";
}

function checkWin(array) {
  if (array.toString() === newWord.toString()) {
    gameresult.textContent = "You won";
    guessBtn.disabled = true;
    totalwins += 1;
    saveWins(totalwins);
    ptotalwins.textContent = "Your Total wins: " + totalwins;
    fullbody.style.background = "green";
  }
}

function checkloose() {
  if (playerLeben == 0) {
    fullbody.style.backgroundColor = "red";
    gameresult.textContent = "You loose";

    guessBtn.disabled = true;
    showWord.textContent = "The word was: " + newWord.join("");
    showWord.style.display = "flex";
    showWord.style.justifyContent = "center";
    showWord.style.textAlign = "center";
  }
}

function saveWins() {
  localStorage.setItem("Wins", totalwins);
}

function loadtotalwins() {
  return localStorage.getItem("Wins");
}

startGame();
clearBtn.addEventListener("click", startGame);
/*function checkWords() {
  let value = inputField.value;
  for (e of newWord) {
    if (e == value) {
      const wörter = document.createElement("p")
      wörter.textContent = e
      
      console.log(e);
      score.textContent = e;
      guessedWord.push(e);
    }
  }
  inputField .value = ""
  score.textContent = value;
  console.log(guessedWord);
}

function clearInput() {
  inputField = "";
  console.log("he");
}



function checkloose() {
  if (leben == 0) {
    console.log("loose");
  }
}

clearBtn.addEventListener("onclick", clearInput);
guessBtn.addEventListener("onclick", checkWords);





function checkWords() {
    let value = inputField.value
    console.log(value)
    
    for (e of newArr){
        if(value == e){
            console.log("good")
        }else{
            console.log("no")
            score.textContent = value

        }
    }
}

function playGame() {
  console.log(inputField.value);
}

guessBtn.addEventListener("onclick", checkWords);*/

/*if(!newWord.includes(value)){
  playerLeben -= 1
  score.textContent = playerLeben
  console.log("works")
  checkloose() //pushs the value in to the doppeltwords method

} */
