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




