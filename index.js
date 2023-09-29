// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  document.getElementById(index).disabled = true;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let arr = ["", "", "", "", "", "", "", "", ""];
let counter = 0;
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if (counter % 2 == 0) {
    fillButton(index, "X");
    arr[index - 1] = "X";
    counter++;
  } else {
    fillButton(index, "O");
    arr[index - 1] = "O";
    counter++;
  }

  checkWinner(index);
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
function checkWinner(index) {
  let cc = winner.map((ws) => ws.reduce((i, j) => i + arr[j], ""));
  if (cc.includes("XXX") || cc.includes("OOO")) {
    winningAlert(document.getElementById(index).innerText);
    restartGame();
  } else if (cc.filter((s) => s.length == 3).length == 8) {
    alert("It is A DRAW!!!!!");
    restartGame();
  }
}
function restartGame() {
  arr = ["", "", "", "", "", "", "", "", ""];
  counter = 0;
  for (index = 1; index <= 9; index++) {
    document.getElementById(index).innerHTML = "";
    document.getElementById(index).disabled = false;
  }
}
