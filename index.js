const generatedNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guess");
  const message = document.getElementById("message");

  const userGuess = parseInt(guessInput.value);
  attempts++;


  if (userGuess === generatedNumber) {
    message.textContent = `Yay! You guessed the number ${generatedNumber} correctly in ${attempts} attempts.`;
  } else if (userGuess < generatedNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
  guessInput.value = "";
}
