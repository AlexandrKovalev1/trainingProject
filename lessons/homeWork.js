let x1 = 8;
let x2 = 5;
let y1 = 1;
let y2 = 1;
let x = Math.abs(x1 - x2);
let y = Math.abs(y1 -y2);
let squeRerectangle = x * y;
console.log(squeRerectangle);


let a = (Math.random() * 100); //   а = случайное число от 0 до 100
let b = (Math.random() * 50);  // b = случайное число от 0 до 50
let precision = 4; // точность три знака после запятой
let fractA = Math.round(a % 1 * Math.pow(10, precision)); // округлённая дробная часть с точностью до 3х знаков
let fractB = Math.round(b % 1 * Math.pow(10, precision));

console.log('Округлённая дробная часть а', fractA);
console.log('ОКРУГЛЁННАЯ ДРОБНАЯ ЧАСТЬ B', fractB);
console.log('а > b', fractA > fractB);
console.log('a < b', fractA < fractB);
console.log('a >= b', fractA >= fractB);
console.log('a <= b', fractA <= fractB);
console.log('a === b', fractA === fractB);
console.log('a != b', fractA != fractB);


let m = Math.round(Math.random() * 20);
let n = Math.round(Math.random() * 20);

let range = Math.abs(m - n); // диапазон между значениями abs для того чтобы был всегда положителен(если одно число с минусом)
let min = Math.min(n, m);
let numberInRange = (Math.round(Math.random() * (range - 2)) + min); //случайное число в диапозоне 

let odd = numberInRange + (numberInRange % 2) + 1; // если число чётное то (numberInRange % 2) = 0 иначе =1
console.log(numberInRange);
console.log('случайное не четное число в диапазоне', m ,'и', n, odd);


