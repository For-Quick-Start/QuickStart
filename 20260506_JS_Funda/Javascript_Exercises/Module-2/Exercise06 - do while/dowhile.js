let userInput = null;
do {
    userInput = prompt('Enter a value');
} while (userInput === null || userInput.length === 0);
console.log(userInput + ' is valid');

/*
A B   !(A && B) <--> !A || !B
F F   T             T
F T   T             T
T F   T             T 
T T   F             F


!(A || B) <--> !A && !B
// Homework: check the truth table of this equality 
*/