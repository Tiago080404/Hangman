let inputField = document.getElementById("inputfield");
let guessBtn = document.getElementById("submitbtn");
let score = document.getElementById("showscore");
let clearBtn = document.getElementById("clearbtn");
let guessStrich = document.getElementById("guessstriche");
let gameDiv = document.getElementById("div1");
let fullbody = document.querySelector("body")


let words = ["Heye"];
let guessedWord = [];

let playerLeben = 8;
score.textContent = playerLeben
let newString = words.join("").toUpperCase();//changed
let newWord = newString.split("");
console.log(newWord);
console.log(newString)


for(let i = 0; i<newWord.length; i++){
  guessedWord.push("_")
}


function createPlaceholder() {

    gameDiv.textContent = '';
  

  for (let i = 0; i < guessedWord.length; i++) {
    let textStriche = document.createElement("span");
    textStriche.textContent = guessedWord[i];
    textStriche.style.margin = "5px";
    gameDiv.appendChild(textStriche);
  }
}
createPlaceholder();

function checkWords() {
  let value = inputField.value;
  value = value.toUpperCase()
  console.log(value.toUpperCase())
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === value) {
      console.log("h");
      guessedWord[i] = newWord[i];
    }
  }
  if(!newWord.includes(value)){
    playerLeben -= 1
    score.textContent = playerLeben
    console.log("works")
    checkloose()
  }
  console.log(guessedWord);
  checkWin(guessedWord);
  createPlaceholder();
}

function checkWin(array) {
  if (array.toString() === newWord.toString()) {
    let checkWinner = document.createElement("span")
    checkWinner.textContent = "You won"
    checkWinner.style.display = "flex"
    checkWinner.style.justifyContent = "center"
    fullbody.appendChild(checkWinner)
    console.log("You won ");
    guessBtn.disabled = true
  }
  //console.log(array.toString()===newWord.toString())
}




function checkloose() {
  if (playerLeben == 0) {
    let checkLooser = document.createElement("span")
    checkLooser.textContent = "You loose"
    checkLooser.style.display = "flex"
    checkLooser.style.justifyContent = "center"
    fullbody.appendChild(checkLooser)
    console.log("loose");
    guessBtn.disabled = true
  }
}











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
