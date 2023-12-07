let attempts = 0;

function confirmGuess(myGuess) {
    const generatedNumber = Math.floor(Math.random() * 100) + 1;
    attempts++;
    //Math.floor() rounds down a decimal number to the nearest integer 
    //Math.random() generates a random number
    //Adding 1 ensures that the range start from 1
        console.log(`Generated number: ${generatedNumber}`);
    //I used template literals to interpolate string and embed the expression inside the string literals using backticks (``) and dollar sign ($)    

    if (myGuess === generatedNumber) {
        console.log(`Yay! You guessed the number ${generatedNumber} correctly in ${attempts} attempts.`);
    } else if (myGuess < generatedNumber) {
        console.log('Too low! Try again.');
    } else {
        console.log('Too high! Try again.');
    }
}

confirmGuess(12);
