let x1 = 10 + 5; // 15
let y = 10 - 5; // 5
let z = 10 * 5; // 50
let q = 10 / 5; // 2
let w = 10 % 3; // 1


//всё как в php

//Тернарный оператор

let x = 0;

if (Math.random() > 0.5) {
    let x = 10;
} else {
    let x = 20;
}

x = Math.random() > 0.5 ? 10 : 20;

// плохой пример

let age = 23;
let isAdult = age > 18 ? true : false;

//нужно так 

let isAdultDoneRight = age > 18;