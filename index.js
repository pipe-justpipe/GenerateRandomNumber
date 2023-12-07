const generatedNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function confirmGuess(myGuess) {
    attempts++;

    if (myGuess === generatedNumber) {
        console.log(`Yay! You guessed the number ${generatedNumber} correctly in ${attempts} attempts.`);
    } else if (myGuess < generatedNumber) {
        console.log('Too low! Try again.');
    } else {
        console.log('Too high! Try again.');
    }
}

confirmGuess(50); 

