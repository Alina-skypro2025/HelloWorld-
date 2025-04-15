
//Задание 1

const str = 'js';
console.log(str.toUpperCase()); // 'JS'

//Задание 2

function filterByStart(arr, startStr) {
    return arr.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
}

//Задание 3

const num = 32.58884;

console.log(Math.floor(num)); 
console.log(Math.ceil(num));  
console.log(Math.round(num)); 

//Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

console.log("Min:", Math.min(...numbers)); 
console.log("Max:", Math.max(...numbers)); 

//Задание 5


function getRandomFrom1To10() {
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
}

getRandomFrom1To10();

//Задание 6

function getRandomArray(n) {
    const length = Math.floor(n / 2);
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * (n + 1)));
    }
    return result;
}


//Задание 7

function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Задание 8

console.log(new Date());

//Задание 9

const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата:", currentDate);
console.log("Через 73 дня:", futureDate);

//Задание 10

function formatDate(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = days[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    console.log(`Дата: ${day} ${month} ${year} — это ${weekday}`);
    console.log(`Время: ${hours}:${minutes}:${seconds}`);
}

