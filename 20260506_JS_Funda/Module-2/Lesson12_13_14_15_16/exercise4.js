let spanLower = 0;
let spanHigher = 100;
let compGuess = Math.floor(Math.random()*spanHigher);
let userInput = null;

do {
    userInput = prompt(`My guess is that the number is: ${compGuess} Is the actual value higher or lower or a match?`);
    if (userInput === "higher") {
        console.log("    guess was too low");
        spanLower = ++compGuess;
        console.log("    higher is still", spanHigher);
        console.log("    lower is now", spanLower);
        compGuess = spanLower + Math.floor((spanHigher-spanLower)/2);
        console.log("        next guess will be",compGuess);
    } else if (userInput === "lower") {
        console.log("    guess was too high");
        spanHigher = --compGuess;
        console.log("    higher is now", spanHigher);
        console.log("    lower is still", spanLower);
        compGuess = spanLower + Math.floor((spanHigher-spanLower)/2);
        console.log("        next guess will be",compGuess);
    } else if (userInput === "match") {
        // isMatch = true;
        alert(`Guessed the number: ${compGuess}`)
        break;
    }
} while (true);









