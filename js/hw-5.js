//Задание 1

const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    if (arr1[i] === 10) break;
}

//Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 4) {
        console.log(i);
        break;
    }
}


//Задание 3

const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(' '));

//Задание 4

const arr4 = [];
for (let i = 0; i < 3; i++) {
    const innerArr = [];
    for (let j = 0; j < 3; j++) {
        innerArr.push(1);
    }
    arr4.push(innerArr);
}
console.log(arr4);

//Задание 5

const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);

//Задание 6

let arr6 = [9, 8, 7, 'a', 6, 5];
arr6 = arr6.sort().filter(item => typeof item === 'number');
console.log(arr6);

//Задание 7

const arr7 = [9, 8, 7, 6, 5];
const guess = prompt('Угадай число:');
if (arr7.includes(Number(guess))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8

const str8 = 'abcdef';
const reversed = str8.split('').reverse().join('');
console.log(reversed);

//Задание 9

const arr9 = [[1, 2, 3], [4, 5, 6]];
const flatArr = [...arr9[0], ...arr9[1]];
console.log(flatArr);

//Задание 10

const arr10 = [1, 3, 5, 7, 9];
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}

//Задание 11

function getSquares(arr) {
    return arr.map(num => num * num);
}
console.log(getSquares([1, 2, 3, 4]));

//Задание 12

function getWordsLength(arr) {
    return arr.map(word => word.length);
}
console.log(getWordsLength(['hello', 'world', 'hi']));

//Задание 13

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}
console.log(getNegativeNumbers([1, -2, 3, -4, 5, -6]));

//Задание 14

const arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 11));
}
const evenArr = arr14.filter(num => num % 2 === 0);
console.log('Исходный массив:', arr14);
console.log('Четные числа:', evenArr);

//Задание 15

const arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
const avg = arr15.reduce((sum, num) => sum + num, 0) / arr15.length;
console.log('Массив:', arr15);
console.log('Среднее арифметическое:', avg);