/*
Вычисляем рвсстояние между двумя точками.
Даны координаты Х, у 2-х точек. Нужно вывести расстояние между нимию
Вычисляем по теопере Пифагора.
*/

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1 - x2); // 10 - (-3) = 13
let cathetus2 = Math.abs(y1 - y2); // 2 - 3 = 1

console.log(Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)));

/* 
Сравниваем 2 дробных числа с указаной точностью.
Даны 2 числа и кол-во знаков после запятой, которое необходимо учитывать.
Вывести информация, равны ли эти числа, больше ли первое число или меньше второго.
*/

let first = 0.1 + 0.2 + 0.033;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(
    first * Math.pow(10, precision)
);   // округляем (первое(0.333) * 10^3) = 333

let secondNormslized = Math.round(
    second * Math.pow(10, precision)
);  // округляем (второе(0.33334) * 10^3) = 333

console.log('Исходные числа равны', first === second); // false
console.log('Числа равны', firstNormalized === secondNormslized); // true
console.log('Первое число больше', firstNormalized > secondNormslized); // false
console.log('Второе числобольше', firstNormalized < secondNormslized); // false


/* 
Генератор случайных чисел между n до m.
Учесть, что n не обязательно меньше , чем m!
*/

let n = -100;
let m = 350; 

// колличество цифр которые могут быть сгенерированы
let range = Math.abs(m - n); // диапазон 450
// округлённое число от 0 до range
let numberInRange = Math.round(Math.random() * range);//номер в диапазоне = округляем(случайное число от 0 до 450)
// Левая граници возможного числа
let min = Math.min(n, m); // -100

console.log(min + numberInRange);
console.log(Math.round(Math.random() * range) + Math.min(n, m)); // запись  аналогична предидущей


/* 
Выводим отдельно целую и дробную части числа с точностью n.
*/

let precicion = 3; 
let number = 0x12f + .3 + .1; // 303.40000000000003 0x12f= 303;

console.log('Исходное число', number);
console.log('Целая часть', Math.floor(number));

// Остаток от деления на 1 возвращает дробную часть 
console.log('Дробная часть', Math.round(number % 1 * Math.pow(10, precicion))); // округление от (0.4000000000000341 * 10^3) = 400

