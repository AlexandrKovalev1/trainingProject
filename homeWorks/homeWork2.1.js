let x1 = -5;
let y1 = 8;
let x2 = 10;
let y2 = 5;

let square = Math.abs(x1 - x2) * Math.abs(y1 - y2); // катет равен расстоянию между двумя точками а площадь равна а*б

console.log(square);

a = 13.123456789;
b = 2.123;
n = 5;

let fractNumberA = Math.floor((a % 1) * Math.pow(10,n));
//округляем в низ(остаток от деления на 1 - дробное число * 10 в степени n)
let fractNumberB = Math.floor((b % 1) * Math.pow(10,n));

console.log(fractNumberA < fractNumberB);
console.log(fractNumberA > fractNumberB);
console.log(fractNumberA <= fractNumberB);
console.log(fractNumberA >= fractNumberB);
console.log(fractNumberA === fractNumberB);
console.log(fractNumberA !== fractNumberB);
console.log(fractNumberB);



n = 10;
m = 8;
let range = Math.abs(m-n);
let min = Math.min(m,n);
let max = Math.max(m,n);
let random = Math.round((Math.random() * (range -(max % 2 === 0 ? 1 : 0))) + min);
let even = Math.round(random + (random % 2 === 0 ? 1 : 0));
console.log(random);
console.log(even);


console.log((1 + 3) % 7);