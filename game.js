const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value, 10);
  const message = document.getElementById("message");
  attempts++;

  if (isNaN(userGuess)) {
    message.textContent = "Пожалуйста, введите число.";
    return;
  }

  if (userGuess < secretNumber) {
    message.textContent = "Загаданное число больше.";
  } else if (userGuess > secretNumber) {
    message.textContent = "Загаданное число меньше.";
  } else {
    message.textContent = `Поздравляю! Ты угадал число ${secretNumber} за ${attempts} попыток.`;
    document.querySelector("button").disabled = true;
  }

  document.getElementById("guessInput").value = "";
}