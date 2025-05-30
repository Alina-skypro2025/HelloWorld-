const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

let correctCount = 0;

for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];
    const userAnswer = prompt(`${q.question}\n${q.options.join('\n')}`);

    if (userAnswer === null) {
        alert("Вы отменили викторину.");
        break;
    }

    if (parseInt(userAnswer) === q.correctAnswer) {
        correctCount++;
    }
}

alert(`Вы дали ${correctCount} правильных ответ(а).`);