
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameEnded = false;

document.getElementById('submitBtn').addEventListener('click', checkGuess);

function checkGuess() {
  if (gameEnded) return;
  
  const guessInput = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const userInput = guessInput.value.trim();

  if (userInput === "") {
    message.textContent = "Вы отменили игру.";
    document.getElementById("submitBtn").disabled = true;
    guessInput.disabled = true;
    gameEnded = true;
    return;
  }

  const userGuess = parseInt(userInput, 10);
  attempts++;

  if (isNaN(userGuess)) {
    message.textContent = "Пожалуйста, введите корректное число.";
    return;
  }

  if (userGuess < secretNumber) {
    message.textContent = "Загаданное число больше.";
  } else if (userGuess > secretNumber) {
    message.textContent = "Загаданное число меньше.";
  } else {
    message.textContent = `Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток!`;
    document.getElementById("submitBtn").disabled = true;
    guessInput.disabled = true;
    gameEnded = true;
  }

  guessInput.value = "";
}