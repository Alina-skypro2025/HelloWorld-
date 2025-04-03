//Задание 1. 

function getMin(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log(getMin(8, 4));
console.log(getMin(6, 6));
console.log(getMin(10, 25));

//Задание 2.

function checkEvenOdd(n) {
    if (n % 2 === 0) {
      return 'Число четное';
    } else {
      return 'Число нечетное';
    }
  }
  
  console.log(checkEvenOdd(4));
  console.log(checkEvenOdd(7));

  //Задание 4. 

  function printSquare(num) {
    console.log(num * num);
  }
  
  printSquare(5);
  
  function getSquare(num) {
    return num * num;
  }
  
  let result = getSquare(6);
  console.log(result);

  //Задание 5. 
  function askAge() {
    let age = prompt("Сколько вам лет?");
    age = Number(age); // Преобразуем ввод в число
  
    if (age < 0) {
      alert("Вы ввели неправильное значение");
    } else if (age >= 0 && age <= 12) {
      alert("Привет, друг!");
    } else if (age >= 13) {
      alert("Добро пожаловать!");
    } else {
      alert("Пожалуйста, введите число");
    }
  }

  //задание 6. 
  function multiplyIfNumbers(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
  
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    } else {
      return num1 * num2;
    }
  }
  
  console.log(multiplyIfNumbers(3, 4));        
  console.log(multiplyIfNumbers("5", "2"));    
  console.log(multiplyIfNumbers("abc", 3));    

  //задание 7. 
  const circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  const circle2 = {
    radius: 10,
    getArea: function() {
      return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  console.log("Площадь circle1:", circle1.getArea());
  console.log("Периметр circle1:", circle1.getPerimeter()); 
  
  console.log("Площадь circle2:", circle2.getArea());   
  console.log("Периметр circle2:", circle2.getPerimeter()); 