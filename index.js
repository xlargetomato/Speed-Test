/////
/// THE WORDS////
const words = [
  //   "mother",
  // "on",
  // "together",
  // "dad",
  // "look",
  // "by",
  // "family",
  // "fighting",
  // "try",
  // "me",
  // "top",
  // "upcoming",
  // "new",
  // "my",
  // "texts",
  // "my",
  // "favorites",
  // "create",
  // "text",
  // "improve",
  // "your",
  // "typing",
  // "America",
  // "Speed",
  // "Language",
  // "English",
  // "become",
  // "forum",
  // "feedback",
  // "contact",
  // "supporter",
  // "FAQ",
  // "open",
  // "chat",
  // "typing",
  // "test",
  // "top",
  // "200",
  // "words",
  // "typing",
  // "test",
  "advanced",
  "top",
  "words",
  "custom",
  "typing",
  "test",
  "create",
  "your",
  "own",
  "multiplayer",
  "typing",
  //   "test",
  //   "play",
  // "against",
  //   "others",
  // //   "competition",
  // //   "who",
  // //   "can",
  // //   "type",
  // //   "the",
  "fastest",
  "text",
  "practice",
  "your",
  "own",
  "text",
  "this",
  "one",
  "of",
  "be",
  "setting",
  "pace",
  "sus",
  "common",
  "come",
  "coming",
  "quicker",
  "price",
  "pace",
  "fast",
  "pass",
  "goal",
  "amongus",
  "fifa",
  "football",
  "basketball",
  "practice",
  "promise",
  "heaven",
  "audio",
  "video",
  "screen",
  "graphic",
  "card",
  "cart",
  "mouse",
  "keyboard",
  "select",
  "selected",
  "words",
  "from",
  // "form",
  "lightly",
  // "list",
  // "of",
  "most",
  "helps",
  "increase",
  "english",
  "france",
  "england",
  "mohamed",
  "minute",
  "ahmed",
  "mostafa",
  "language",
  "create",
  "start",
  "programming",
  "improve",
  "shirt",
  "muscle",
  "AMONGUS",
  "board",
  // "here",
  "feed",
  "back",
  "front",
  "hegazy",
  "esmail",
  "router",
];
const wordsEasy = [
  "sus",
  "dad",
  "mom",
  "to",
  "as",
  "ass",
  "back",
  "top",
  "one",
  "you",
  "me",
  "yes",
  "no",
  "joke",
  "man",
  "lick",
  "port",
  "set",
  "door",
  "peek",
  "line",
];
/////// LEVELS ////////
const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
  AhmedHegazy: 1,
};
////////Selected Diff (Seconds)

//// default
let defaultLevel = "Normal"; /// change level from here <<<<<<<
let defaultLevelSeconds = lvls.Normal;

/////////////////////////////selectors////////////////////////////
let startButton = document.querySelector(".start");
let lvlNameL = document.querySelector(".message .LVL");
let lvlNameS = document.querySelector(".message .seconds");
let theWord = document.querySelector(".theword");
let theWordUp = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeft = document.querySelector(".time span");
let scoreGot = document.querySelector(".got");
let scoreTotal = document.querySelector(".total");
let finish = document.querySelector(".finish");

////////////// Setting Level SUS name <> seconds <> score
////////Selected Diff (Seconds)
let diffseconds = document.querySelector("#diffseconds");
diffseconds.addEventListener("change", function (e) {
  defaultLevel = e.target.value;
  defaultLevelSeconds = lvls[e.target.value];
  lvlNameL.innerHTML = defaultLevel;
  lvlNameS.innerHTML = defaultLevelSeconds;
  timeLeft.innerHTML = defaultLevelSeconds;
});
/////
lvlNameL.innerHTML = defaultLevel;
lvlNameS.innerHTML = defaultLevelSeconds;
timeLeft.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length - 48;
///////////////// remove paste event
input.onpaste = function () {
  return false;
};
///////////////////////////////////////

/////////////// start

startButton.addEventListener("click", function suss() {
  startButton.remove();
  input.focus();
  random();
});

//////////word function !
function random() {
  ////generate random word (important)
  let randomWord = words[Math.floor(Math.random() * words.length)];
  //////word index
  let wordIndex = words.indexOf(randomWord);
  //////// remove word from array
  words.splice(wordIndex, 1);
  /////// show random word >>
  theWord.innerHTML = randomWord;
  ///////empty input when next word comes on
  theWordUp.innerHTML = "";
  ////////Generate WOOOOOOOOOOOOOOORDS XD
  for (let i = 0; i < words.length - 48; i++) {
    //// create div element
    let div = document.createElement("div");
    let text = document.createTextNode(words[i]);
    div.appendChild(text);
    theWordUp.appendChild(div);
  }
  /////// call start play function
  playstart();
}

/////////////////////
function playstart() {
  timeLeft.innerHTML = defaultLevelSeconds;
  let start = setInterval(function () {
    timeLeft.innerHTML--;
    if (timeLeft.innerHTML === "0") {
      ///stop timer
      clearInterval(start);
      /// compare words
      if (theWord.innerHTML === input.value) {
        // <<<<<<<<<<<<<<<<<<<<<<< for upper/lower case diff
        ///// empty input field
        input.value = "";
        //// increase score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          /// call generate word function
          random();
        } else {
          let span = document.createElement("span");
          span.className = "good";
          let spantxt = document.createTextNode("شكلك بتعرف تلعب");
          span.appendChild(spantxt);
          finish.appendChild(span);
          //// remove up come words box
          theWord.remove();
          input.value = "MAKE IT HARDER BROTHER !";
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spantxt = document.createTextNode("مبتعرفش تلعب ولا ايه ؟");
        span.appendChild(spantxt);
        finish.appendChild(span);
        theWord.remove();
        input.value = "مبتعرفش تلعب ولا ايه ";
      }
    }
  }, 1000);
}
/////////////// Case or Lower

let sus = document.querySelector(".sus");
sus.innerHTML = "Ahmed Hegazy";
///////////// make select box for diffculti [2] ///////////////////////////////////////////////// Done
///////////// make select box for difficulti that is longer words not time [4] ///////////////// Working On
///////////// make difficulti witch he need to uppercase or lowercase the word [3] //////////// Working On
///////////// write game instruction [1] ///////////////////////////////////////////////////// Done (80%)
///////////// make reset button ///////////////////////////////////////////////////////////// Done

///restart///
let reset = document.querySelector(".reset");
reset.addEventListener("click", function resets() {
  window.location.reload();
});

//////////guide
let guide = document.querySelector(".guide");
guide.addEventListener("click", function ss() {
  window.open("./susthings/index.html");
});
