// #region
//
//
//
// =>
// Example 1 - Математические операторы
// Выведи на экран общее количество яблок
// и винограда.
// Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

// =>
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students -= 50;
// console.log(students);

// =>
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 8 + 2 * 5;
// console.log(result);

// =>
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;

// console.log(Math.ceil(value));

// =>
// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const total =repairBots + defenceBots;
// const message = `${companyName} has ${total} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// =>
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1,75';

// const parsedWeight = weight.replace(',', '.')
// const parsedHeight = height.replace(',', '.')

// const result = parseFloat(parsedWeight) / parseFloat(parsedHeight)**2;

// const bmi = result.toFixed(1);
// console.log(bmi); // 28.8

// =>
// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('A' > 'Z');

// console.log('3' > '111'); // 51 > 49

// console.log('A'.charCodeAt());
// console.log('B'.charCodeAt());

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// =>
// Example 8 - Логические операторы
// Каким будет результат выражений?

// && -> першу брехню(false) або останню правду(true);
// || -> першу правду(true) або останню брехню(false);

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(1232 || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// =>
// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной
//  incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue:
// null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const dbName = '';
// const name = dbName ?? '';
// console.log(name);

// =>
// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes
// (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 1441;

// const hours = (totalMinutes / 60).toFixed(0)
// const minutes = (totalMinutes % 60).toString();

// const parsedHours = hours.padStart(2, 0);
// const parsedMinutes = minutes.padStart(2, 0);

// console.log(`${parsedHours}:${parsedMinutes}`);

// 1. null > 0; null < 0 -> false;
// 2. null == 0 -> false;
// 3. null >= 0; null <= 0 -> true;

// Explanations
// 1. null > 0; null < 0 -> false;
// тому що null приводиться до 0;

// 2. null == 0 -> false;

// 3. null >= 0; null <= 0 -> true;
//

// const x = 5;

// x >= 10; // x < 10 => true; | x < 10 => false

// null >= 0; // null < 0 => false; true

// #endregion

// LOOPS

// const string = 'abcdefghijklnmopqrstuvwxyz';
// const aplhabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// console.log(string.length, 'string length');

// const vowels = 'aeiouy';
// let consonants = '';
// let consonantsArray = [];

// for (const letter of string) {
//     if (!vowels.includes(letter)) {
//         consonants += letter;
//     }
// }

// console.log(consonants);

// for (const letter of aplhabetArray) {
//     console.log(letter);
//     if (!vowels.includes(letter)) {
//         consonantsArray.push(letter);
//     }
// }

// console.log(consonantsArray);

// function getEvenNumbers(start, end) {
//     console.log(start, end);
//   const array = [];
//   for (let number = start; number < end; number += 1) {
//     if (number % 2 === 0) {
//       array.push(number);
//     }
//   }
//   console.log(array);
// }
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     console.log(productName in product);
//     if (productName in product) {
//       totalPrice = product.price * product.quantity;
//     }
//   }

//   return totalPrice;
// }

// console.log(calculateTotalPrice('Radar'));

// const object = {
//   name: 'Radar',
//   price: 1300,
//   quantity: 4,
//   type: "module",
//   madeIn: "Japan",

// };

// for (const { name, price } of products) {
//   console.log(name, price);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {low: lowToday, high: highToday, icon: iconToday},
//   tomorrow: {low: lowTomorrow, high: highTomorrow, icon: iconTomorrow = 'default'},
// } = forecast;
// console.log(lowToday, highToday, iconToday, lowTomorrow, highTomorrow, iconTomorrow);

// function testFunc({
//     today: {
//       low: lowToday,
//       high: highToday,
//     },
//     tomorrow: {
//       low: lowTomorrow,
//       high: highTomorrow,
//     },
//   }) {

//   console.log(lowToday, highToday, lowTomorrow, highTomorrow);
// }

// testFunc(forecast);
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);

// Это точная, но независимая копия массива temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps);

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     let index = this.books.indexOf(oldName);
//     this.books.splice(index, 1, newName);
//   },
// };

// bookShelf.updateBook('Haze', 'Dungeon chronicles');

// console.log(
//     bookShelf.books,
// );

// const string = 'Hello, world';


// console.log(string.indexOf('world'));

// const newPotion = { name: 'Speed potion', price: 460 };

// const potions = [
//     { name: 'Speed potion', price: 460 }, // 0
//     { name: 'Dragon breath', price: 780 }, // 1
//     { name: 'Stone skin', price: 520 }, // 2
// ];

// console.log(`${newPotion.name}`);

// for (let i = 0; i < potions.length; i++) {
//     if (potions[i].name === newPotion.name) {
//         potions.splice(i, 1);
//     }
// }

// function myFunc(f, ...args) {
//     console.log('starting myFunc...');
//     console.log(args);
//     for (const arg of args) {
//         f(arg)
//     }
// }

// /*
// function show(y) {
//     console.log(y);
// } */

// myFunc((x) => { console.log(x) }, 1, 2, 3, 4, 5);

// function myFunc1(z) {
//     console.log(z);
// }

// myFunc1(function(x) {console.log(x)})
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };


// doMath(10500, 47, function (x, y) {
//     return x * y;
// });
// doMath (9, 1, function (x, y) {
//     return x + y;
// });
// doMath(1050, 2475, function (x, y) {
//     return x - y;
// });



// function changeEven(numbers, value) {
//   // Change code below this line
//   const result = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       result.push(number + value);
//       result.push(number);
//     } else {
        
//       }

//   });
//   return result;
// }


// const numbers = [44, 13, 81, 92, 36, 54];

// const newMap = numbers.map(element => {
//     if (element % 2 === 0) {
//         return 'even';
//     } else {
//         return 'odd';
//     }
// });

// console.log(newMap);
// console.log(numbers);


// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// console.log(
//     students.map(student => student.courses),
//     students.flatMap(student => student.courses),
// );

// const numbers1 = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// function callback(number) {
//     return number > 25;
// }

// function filterNumbers(array, callback) {
//     const result = [];
//     for (const number of array) {
//         if (callback(number)) {
//             result.push(number);
//         }
//     }

//     return result;
// }

// const newArray = filterNumbers(numbers1, callback);
// const newArray1 = numbers1.filter(number => number > 25);
// console.log(newArray);
// console.log(newArray1);
// console.log(Array.prototype.filter);

// const object = {
//     name: 'Alex',
//     age: 31,
//     filter: function () { }
// }

// const genres = ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure'];

// const uniqueGenres = genres.filter(genre => {
//     console.log(genre);
// })

// const lettersArray = ['a', 'b', 'c'];
// const numbersArray = [100, 200, 300, 400];

// function createString(array) {
//     let result = '';

//     for (const letter of array) {
//         result += letter;
//     }

//     return result;
// }

// console.log(
//   createString(lettersArray), // ['a', 'b', 'c'] => abc
// );

// console.log(
//     lettersArray.reduce((result, letter) => result + letter, 'The string is: '),
//     numbersArray.reduce((sum, number) => sum + number, 0),
// );
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort(
//   (firstBook, secondBook) => firstBook.author - secondBook.author,
// );

// const sortedByReversedAuthorName = [...books].sort(
//   (firstBook, secondBook) => secondBook.author - firstBook.author,
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.author - secondBook.author,
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.author - firstBook.author,
// );
// console.log(sortedByDescentingRating);

// let value;
// console.log(value);
// value = 20;
// console.log(value);
// // value = "Hello";
// // console.log(value);
// const str = `value - ${value -10}`;
// console.log(str);
// const num = 15;
// const str = '15';
// // console.log(typeof str);
// console.log(typeof num === 'number');
// alert('привіт вчи js')
// console.log('привіт вчи js');
// const message = prompt("Введіть ім'я")
// console.log(message);
// const result = confirm(`lerne englih`);
// console.log(result);

/****Основні оператори***** */

// console.log(25 > Number(`21`));
// console.log(25 < 27);
//
// const password = prompt('Enter your password');
// console.log(password === '220708');
// console.log(25 <= 25);
// console.log('1'!== 1);
 
/****Логічні оператори ****/

// console.log(false || 1);
// console.log(true && 4 && 'kiwi');
// console.log(false ?? 4);
// console.log(null ?? 72);

/**** Методи**** */

// const str = '25.7as32px';
// // console.log(Number.parseFloat(str));
// // console.log(Number.parseInt(str));

// console.log(isNaN(str));
// console.log(Number.isNaN(str));

/**** Класс Math *****/

// const value = 11.400
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));
// console.log(Math.pow(5, 4));

/****** Методи та властивості для роботи з рядками ****/

// const str = "Hello world";
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.indexOf('H'));
// console.log(str.includes('Hello'));
// console.log(str.includes(' '));
// console.log(str.endsWith(' world'));
// console.log(str.startsWith('Hello '));
// console.log(str.replace('Hello', 'love'));
// console.log(str.replaceAll('l','super'));
// console.log(str.slice(str.indexOf('world'), str.length));
// console.log(str.indexOf('world'));
// console.log(str.slice(0, str.indexOf(' ')));
// let value = 11;
// if (value === 10) {
//     console.log('condition true', ':)');
// }

/***** Інструкція if та її варіації *****/

// let value = ;
// if (value === 10) {
//   console.log('condition true', ':)');
// } else {
//     console.log('condition false', ':(');
// }
// let value = 10;
// if (value === 7) {
//     console.log("value 7");
// } else if (value === 8) {
//     console.log("value 8");
// } else if (value === 9) {
//     console.log("value 9");
// } else {
//     console.log("another value");
// }

/***** Інструкція swich *****/

// const name = prompt('What your name ?');
// switch (name) {
//     case "Kate":
//         console.log('value Kate');
//         break;
//     case "Ivan":
//         console.log('value Ivan');
//         break;
//     case "Alice":
//         console.log('value Alice');
//         break;
//     default:
//         console.log("Default value");
// }

/****** Тернарний оператор******/
// condition ? true : false

// const value = 12;
// // let message = value > 15 && value < 20 ? 'в діапозоні від 15 до 20' : 'спробуй ще';
// // console.log(message);

// let message = "спробуйте ще";
// if (value > 15 && value < 20) {
//     message = "в діапозоні від 15 до 20";
// }
// console.log(message);

/****** Цикл for ******/

// const message = 'Hello world';
// for (let i = 0; i < message.length; i+=1){
//     console.log(message[i]);
// }

/******* практика********/
// let message = prompt("Color ?");
// let action;
// if (message) {
//     message = message.toLowerCase();
// }
// switch (message) {
//     case "red":
//         action = "stop";
//         break;
    
//     case "yellow":
//         action = "ready";
//         break;
    
//     case "green":
//         action = "go";
//         break;
    
//     default:
//         action = "be careful";
    
// }
// console.log(action);

// function check(text, answer) {
//     let message = prompt(text);
//     if (message) {
//       message = message.toLowerCase();
//     }
//         console.log(message);
    
//     return message === answer;
// }


// console.log(
//     check("Хочь не літак, а крилатий, без крил не може працювати.", "вітряк")
// );
// console.log(check("Через воду він проводить, а сам з місця вік не сходить.", "міст"));
// function getDays(deps) {
//     const speedDays = 7;
//     const speedNight = 2;
//     let total = 0;
//     let days = 0;
//     while (total < deps) {
//         total += speedDays;
//         days += 1;
//         if (total < deps) {
//             total -= speedNight;
//        }
//     }
//     console.log(days);
// }
// getDays(42);
// function countVowel(str) {
//     const vowels = "aeiou";
//     let counter = 0;
//     for (let i = 0; i < str.length; i += 1) {
//         if (vowels.includes(str[i])) {
//             counter += 1;
//         }
//     }
//     return counter;
// }
// function createFileName(name, ext) {
//   name.trim();
 
// }
// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   const newArray = [firstElement, lastElement];
//   return newArray;
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// function getLength(array) {
//   const text = array.join('').length;
 
//   return text;
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));
// console.log(getLength(['M', 'a', 'n', 'g', 'o']));
// console.log(getLength(['top', 'picks', 'for', 'you']));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = ;
// const nonExtremeEls = ;
// const lastThreeEls = ;
//
//

// function getEvenNumbers(start, end) {
//   let doubleNumber = [];
//   for (let i = start; i <= end; i += 1) {
//       if (i % 2 === 0) {
//         doubleNumber.push(i);
//     }
//   }
//   return doubleNumber;
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// console.log(getEvenNumbers());

// function checkStorage(storage, item) {
//     const fgh = item.toLowerCase();
//     if (storage.includes(fgh)) {
//     return `${fgh} is available to order!`;
// } else {
//   return "Sorry! We are out of stock!";
// }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'plum'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pear'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'orange'));
// console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot'));

// function getCommonElements(array1, array2) {
//     let newMas = [];
    
//     for (let i = 0; i <= array1.length; i += 1) {
//       if (array2.includes(array1[i])) {
//         newMas.push(array1[i]);
//       }
//     }
//     return newMas;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// const slug = 'amazing french recipes';
// const slugParts = slug.split(' ');
// console.log(slugParts);
// const fruits = ["orange", "banana"];
// console.table(fruits);
// fruits.push("papae");
// console.table(fruits);
// fruits.pop();
// console.table(fruits);
function calc(a, b, callback) {
    const result = callback(a, b);
    console.log(result);
}

// calc(2, 3, function (x, y) {
//     return x + y;
// });
// calc(2, 3, (x, y) => x + y);  
// calc(10, 50, (s, l) => s * l);   
calc(100, 900, (p, v) => p + v);             