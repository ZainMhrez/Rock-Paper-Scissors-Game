// Declare variables
const winsScore = document.querySelector(".score-box .score .wins span");
const drawsScore = document.querySelector(".score-box .score .draws span");
const losesScore = document.querySelector(".score-box .score .loses span");
const choice = document.querySelectorAll(".arena .choices .choice");
const resetBtn = document.querySelector(".reset");
const modal = document.querySelector(".modal");
const resultText = document.querySelector(".modal .content .result-txt");
const myChTxt = document.querySelector(
  ".modal .content .final-choices .my-choice .text"
);
const myChIcon = document.querySelector(
  ".modal .content .final-choices .my-choice i"
);
const computerChTxt = document.querySelector(
  ".modal .content .final-choices .computer-choice .text"
);
const computerChIcon = document.querySelector(
  ".modal .content .final-choices .computer-choice i"
);

// Update Score
choice.forEach((e) => {
  e.addEventListener("click", updateScore);
});

// Reset values
resetBtn.addEventListener("click", resetValues);

// generate Computer choice
let choicesArr = ["rock", "paper", "scissors"];
function randomComputerChoice() {
  let random = choicesArr[Math.floor(Math.random() * 3)];
  return random;
}

// Function to Update Score
function updateScore(e) {
  let [me, computer, result] = compareChoices(
    e.target.id,
    randomComputerChoice()
  );

  // call the modalPopup function and pass choices with the result to it
  modalPopup(me, computer, result);
}

// Function to Compare choices
function compareChoices(myCh, computerCh) {
  if (myCh === computerCh) {
    // update draw score and return choices array
    drawsScore.textContent++;
    return [myCh, computerCh, "draw"];
  } else if (myCh === "rock" && computerCh === "paper") {
    // update lose score and return choices array
    losesScore.textContent++;
    return [myCh, computerCh, "lose"];
  } else if (myCh === "rock" && computerCh === "scissors") {
    // update win score and return choices array
    winsScore.textContent++;
    return [myCh, computerCh, "win"];
  } else if (myCh === "paper" && computerCh === "rock") {
    // update win score and return choices array
    winsScore.textContent++;
    return [myCh, computerCh, "win"];
  } else if (myCh === "paper" && computerCh === "scissors") {
    // update lose score and return choices array
    losesScore.textContent++;
    return [myCh, computerCh, "lose"];
  } else if (myCh === "scissors" && computerCh === "rock") {
    // update lose score and return choices array
    losesScore.textContent++;
    return [myCh, computerCh, "lose"];
  } else if (myCh === "scissors" && computerCh === "paper") {
    // update win score and return choices array
    winsScore.textContent++;
    return [myCh, computerCh, "win"];
  }
}

// Function to Reset values
function resetValues() {
  winsScore.textContent = 0;
  drawsScore.textContent = 0;
  losesScore.textContent = 0;
}

// Function to Popup the modal
function modalPopup(me, computer, res) {
  // To display the modal
  modal.style.display = "grid";

  // add result text with color based on the reult
  if (res === "win") {
    resultText.textContent = `You ${res}`;
    resultText.style.color = "#28a745";
  } else if (res === "lose") {
    resultText.textContent = `You ${res}`;
    resultText.style.color = "#dc3545";
  } else {
    resultText.textContent = "It's A Draw";
    resultText.style.color = "#75838a";
  }

  // my choice section
  myChTxt.textContent = me;
  myChIcon.className = "";
  if (me === "scissors") {
    myChIcon.style.transform = `rotate(87deg)`;
  } else {
    myChIcon.style.transform = `rotate(0deg)`;
  }
  myChIcon.classList = `fas fa-hand-${me} fa-8x`;
  // color my section based on the reult
  if (res === "win") {
    myChIcon.style.color = "#28a745";
    myChTxt.style.color = "#28a745";
  } else if (res === "lose") {
    myChIcon.style.color = "#dc3545";
    myChTxt.style.color = "#dc3545";
  } else {
    myChIcon.style.color = "#75838a";
    myChTxt.style.color = "#75838a";
  }

  // computer choice section
  computerChTxt.textContent = computer;
  computerChIcon.className = "";
  if (computer === "scissors") {
    computerChIcon.style.transform = `rotate(87deg)`;
  } else {
    computerChIcon.style.transform = `rotate(0deg)`;
  }
  computerChIcon.classList = `fas fa-hand-${computer} fa-8x`;
  // color computer section based on the reult
  if (res === "win") {
    computerChIcon.style.color = "#dc3545";
    computerChTxt.style.color = "#dc3545";
  } else if (res === "lose") {
    computerChIcon.style.color = "#28a745";
    computerChTxt.style.color = "#28a745";
  } else {
    computerChIcon.style.color = "#75838a";
    computerChTxt.style.color = "#75838a";
  }

  // To hide the modal
  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
