let x1 = -6;
let y1 = 2;
let x2 = 5;
let y2 = -7 ;

let squere = Math.abs((x1-x2) * (y1-y2));
console.log(`Площадь равна = ${squere}`);


// let a = 13.890123;
// let b = 2.891564;
// let n = 3;

// let fractNumberA = Math.floor((a % 1) * Math.pow(10 , n));
// let fractNumberB = Math.floor((b % 1) * Math.pow(10 , n));


// console.log(fractNumberA);
// console.log(fractNumberB);
// console.log(fractNumberA  > fractNumberB);
// console.log(fractNumberA  < fractNumberB);
// console.log(fractNumberA  >= fractNumberB);
// console.log(fractNumberA  <= fractNumberB);
// console.log(fractNumberA  === fractNumberB);
// console.log(fractNumberA  !== fractNumberB);

let n = 1;
let m = 2;

let range = Math.abs(m - n);

let random = Math.round(Math.random() * (Math.max(m , n) % 2 === 0 ? (range - 1) : range)) + Math.min(m , n);
let randomNotEven = Math.round(random + Math.round(random % 2 === 0 ? 1 : 0)) ;
// if(random === Math.max(m , n) && (Math.max(m , n) % 2 === 0)) {
//     randomNotEven = randomNotEven - 2;
// }
console.log(random);
console.log(randomNotEven);