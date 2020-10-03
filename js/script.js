"use strict";
console.log(1);
// переменная number с правильным поведением в отличии от var
let number = 2;
// переменная с ключивым словом означающие константу 
const leftBorderWidth = 1;
// вывод в консоль
console.log(name);
// переменная с устаревшим ключивым словом 
var name = 'ivan';

//  объекты
const obj = {
    name: "Den",
    age: 25,
    isMarried: false
};
// вывод всего содержимого объекта
console.log(obj);
// вывод конкретного свойства
console.log(obj.name);
// вывод с помощью квадратных скобок , но лучше делать это через точку 
console.log(obj["age"]);

//   массив - это частный случай обЪектов
 let arr = ['plum.png', 'orange.png', 6, 'line.png',  obj, number ];
//  вывод в консоль элемент массива через индекс
console.log(arr[4], arr[5]);


// Модальные окна


// alert('First Developer!');

//  Булевое значение 
let result = confirm("Are you here ?");
console.log(result);

// PlaceHolder
const answer = +prompt("Вам есть 18 лет ?","0");
console.log(typeof(answer)); 
// typeof() - опредиляет тип данных !

// вызов окон с помощью массива

const answers = [];

answer[0] = prompt('Как ваше имя ?', '');
answer[1] = prompt('Как ваше фамилия ?', '');
answer[2] = prompt('Сколько вам лет ?', '');

console.log(typeof(answers));

// интерполяция 

const category = 'toys';
const users = 'Ivan';

// console.log('https://someurl.com/' + category); // устаревший способ

console.log(`https://someurl.com/${category}/5`);

alert(`Привет, ${users}`);

// операторы 
let arv = 4,
    red = 6;

console.log("summ" + arv + red);

// операторы инкремента и декремента 
let incr = 20,
    decr = 20;

    // постфиксные (когда оператор ставиться после значения)
incr++; // инкремент (увелечение на 1 еденицу)
decr--; // декремент (уменьшение на 1 еденицу)

// Пример 
console.log(incr);
console.log(decr);

    // префиксные (когда оператор ставиться перед значением)
++incr;
--decr;

console.log(++incr);
console.log(decr--);