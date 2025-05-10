const options = ["камень", "ножницы", "бумага"];

const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();


if (userChoice === null) {
    alert("Вы отменили игру.");
} else if (!options.includes(userChoice)) {
    alert("Некорректный выбор. Пожалуйста, введите: камень, ножницы или бумага.");
} else {
    const computerIndex = Math.floor(Math.random() * 3);
    const computerChoice = options[computerIndex];

    let result = "";

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}\nРезультат: ${result}`);
}