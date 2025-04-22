function generateTask() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let task = '';
    let correctAnswer = 0;

    switch (operator) {
        case '+':
            task = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            task = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            task = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '/':
            
            const dividend = num1 * num2;
            task = `${dividend} / ${num2}`;
            correctAnswer = num1;
            break;
    }

    return { task, correctAnswer };
}


const { task, correctAnswer } = generateTask();


const userAnswer = prompt(`Решите задачу: ${task}`);


if (userAnswer === null) {
    alert("Вы отменили игру.");
} else if (parseFloat(userAnswer) === correctAnswer) {
    alert("Ответ верный!");
} else {
    alert(`Неверно. Правильный ответ: ${correctAnswer}`);
}