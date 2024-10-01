let word;
function startGame() {
  word = fetch("https://random-word-api.herokuapp.com/word?lang=de")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      return response.json();
    })
    .then((data) => {
      word = data[0];
      console.log(word);
    })
    .catch((error) => console.log(error));
  setTimeout(() => {
    showOutput();
  }, 1000);
}
function showOutput() {
  console.log("show: " + word);
}

startGame();

/*function initiliazeGame() {
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
    guessedWord.push("_");
  }
  displayWord();
}
const promise2 = new Promise((resolve, reject) => {
  resolve("hhh");
});
promise2.then((value) => {
  console.log(value);
});
promise2.then((value) => {
  console.log("fsdhgf" + value);
});

("8.jpg");
playerLeben = 7;
imgname = playerLeben + ".jpg";
console.log(imgname);
*/
