/*let word;
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
*/
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

/*function resolveAfterSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
Promise.then(console.log("hh"));

async function asyncCall() {
  console.log("Hey");
  const result = await resolveAfterSeconds();
  console.log(result);
}

asyncCall();
*/
/*pokemon = new Promise("https://pokeapi.co/api/v2/pokemon/ditto");
pokemon.then(console.log(pokemon));
*/

/*url = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(url)
.then((repsonse) => {
    if (!repsonse.ok) {
      throw new Error("Does not work");
    }
    return repsonse.json();
  })
  .then((pokemon) => {
    console.log(pokemon.weight);
  })
  .catch((error) => {
    console.log(error);
  });

url = "https://pokeapi.co/api/v2/pokemon/ditto";
function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url.name);
    }, 5000);
  });
}

fetchdata();*/

function cleanHouse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You have to clean the house");
    }, 3000);
  });
}

function doKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You have to do the kitchen");
    }, 2000);
  });
}

function doTrash() {
  return new Promise((resolve, reject) => {
    resolve("Take out the trash");
  });
}

cleanHouse()
  .then((value) => {
    console.log(value);
    return doKitchen();
  })
  .then((value) => {
    console.log(value);
    return doTrash();
  })
  .then((value) => {
    console.log(value);
  });

doKitchen().then((value) => {
  console.log("Your task:" + value);
});
