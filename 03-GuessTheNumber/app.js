var secretNumber = 8

var guess = +prompt("Guess the secret number (between 1 and 10):")

if (guess === secretNumber) {
   alert("Congratulations! You guessed the secret number")
}else if (guess < secretNumber){
    alert("Your guess is too low, guess again")
}else if (guess > secretNumber){
    alert("Your guess is too high, guess again")
}