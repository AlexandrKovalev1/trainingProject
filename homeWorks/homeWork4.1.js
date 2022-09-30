let n = -3;
let m = -10;
let count = 42;
let array = [];

let range = Math.abs(m - n);
let min = Math.min(m, n);

for (let i = 0; i < count; ++i) {
    array[i] = Math.round((Math.random() * range) + min);
}
console.log(array);


let string = ' → ';
let reverseString = '';
for (let i = string.length - 1; i >= 0; --i) {
    reverseString += string[i];
}
console.log(reverseString);

let roadMines = [false, false, false, true, false, false, true, false, false, false];
let mine = true;
let damage = 0;
for (let index in roadMines) {
    if (roadMines[index] === mine) {
        damage++;
        if (damage === 1) {
            console.log(`Танк переместился на ${parseInt(index) + 1} танк повреждён`)
        } else {
            console.log(`Танк переместился на ${parseInt(index) + 1} танк уничтожен`)
            break;} 
    } else {
        console.log(`Танк переместился на ${parseInt(index) + 1}`);
    }
}


let numberDaysOfMonth = [];
let countDaysOfMonth = 31;
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let firsOfJanuary = 'Среда';
let start = 0;

switch(firsOfJanuary) {
    case 'Вторник':
        start = 1;
        break;
    case 'Среда':
        start = 2;
        break;
    case 'Четверг':
        start = 3;
        break;
    case 'Пятница':
        start = 4;
        break;
    case 'Суббота':
        start = 5;
        break;
    case 'Воскресенье':
        start = 6;
        break;
}
for (let i = 0; i < countDaysOfMonth; ++i) {
    numberDaysOfMonth[i] = parseInt(i) + 1;
}

let i = 0;
while (i < numberDaysOfMonth.length - 1) { // 0 < 30
        for(let j = 0; j < daysOfWeek.length; ++j) {
            let index = Math.round((j + start) % daysOfWeek.length);
            console.log(`${parseInt(i) + 1} января ${daysOfWeek[index]}`)
            if (i < numberDaysOfMonth.length - 1) {
                i++;
            } else {
                break;
            }
    }
}
