let x1 = 8;
let y1 = 1;
let x2 = 5;
let y2 = 1;

let x = Math.abs(x1 - x2); // abs для получения положительного значения
let y = Math.abs(y1 - y2);

console.log('Площадь прямоугольника =', x * y);

let a = Math.random() * 15;
let b = Math.random() * 20;
let precision = 5;

let fractNumberA = Math.floor((a % 1) * Math.pow(10, precision));
let fractNumberB = Math.floor((b % 1) * Math.pow(10, precision));

console.log('числа а =', fractNumberA, 'и b =', fractNumberB);
console.log('a > b', fractNumberA > fractNumberB);
console.log('a < b', fractNumberA < fractNumberB);
console.log('a >= b', fractNumberA >= fractNumberB);
console.log('a <= b', fractNumberA <= fractNumberB);
console.log('a === b', fractNumberA === fractNumberB);
console.log('a != b', fractNumberA != fractNumberB);
//
let n = -3;
let m = 10;

let range = Math.abs(n- m);
let min = Math.min(m, n);
let randomNumber = Math.round((Math.random() * (range -3)) + min);
console.log (randomNumber, 'случайное нечётное число в диапазоне от', n, 'до', m, (randomNumber + (randomNumber % 2) + 3 ));




