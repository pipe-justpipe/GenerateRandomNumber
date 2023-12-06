const generatedNumber = Math.floor(Math.random() * 100) + 1;
//I used Math.floor to round any randomly generated float down to the nearest integer. 
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const message = document.getElementById("message");

  const userGuess = parseInt(guessInput.value);
  //I used parseInt to convert the user's input to a number because it was recognised as a string
  attempts++;


  if (userGuess === generatedNumber) {
    message.textContent = `Yay! You guessed the number ${generatedNumber} correctly in ${attempts} attempts.`;
    //I used template literals for string interpolation with the generated number and the number of attempts
  } else if (userGuess < generatedNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
  // I used the .value = "" (empty string) to clear the input
  guessInput.value = "";

}
