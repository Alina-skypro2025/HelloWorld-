
//Выведите в консоль 2 раза слово Привет
for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

//Выведите в консоль цифры от 1 до 5

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

//Выведите в консоль цифры от 1 до 22

for(let i = 1; i <= 22; i++) {
    console.log(i);
}

//Задание 4. 
const obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`);
}

//Задание 5. 

let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log("Результат деления:", n);
console.log("Результат интерации:", num);

//Задание 6.

const firstFriday = 3;
const lastDay = 31;

for (let day = firstFriday; day <= lastDay; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
