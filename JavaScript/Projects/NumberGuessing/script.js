// Generate random number between 1 and 100
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = []
let numGuess = 1
let playGame = true

// Check if game is active
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

// Validate user guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number!')
    } else if (guess < 1) {
        alert('Please enter a number greater than 1')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over! The number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// Check the guess
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('🎉 You guessed it right! 🎯')
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('⬇️ Number is too low!')
    } else if (guess > randomNumber) {
        displayMessage('⬆️ Number is too high!')
    }
}

// Display previous guesses
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

// Show result message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

// End the game
function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

// Start a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        lowOrHi.innerHTML = ''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
