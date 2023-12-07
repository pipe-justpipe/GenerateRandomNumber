function confirmGuess(myGuess) {
  const generatedNumber = Math.floor(Math.random() * 100) + 1;

//Math.floor() rounds down a decimal number to the nearest integer
//Math.random() generates a random number
//Adding 1 ensures that the range start from 1
  console.log(`Generated number: ${generatedNumber}`);
  if (myGuess === generatedNumber) {
    return `Yay! You guessed the number ${generatedNumber} correctly`;
  } else if (myGuess < generatedNumber) {
    return "Your guess is too low! Please try again.";
  } else {
    return "Your guess is too high! Please try again.";
  }
}

const result = confirmGuess(16);
console.log(result);

//// for green git