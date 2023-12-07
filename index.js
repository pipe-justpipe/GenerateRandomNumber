const generatedNumber = Math.floor(Math.random() * 100) + 1;
//Math.floor() rounds down the decimal of a number to the nearest integer
//Math.random() generates a random floating point number
//Adding 1 ensures the range starts from 1
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

