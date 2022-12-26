let n = 2;
let m = 5;
let count = 50;
let array = [];

for (let i = 0; i < count; ++i) {
    array[i] = Math.round((Math.random() * Math.abs(m - n)) + Math.min(m, n));
}

console.log(array);

let string = 'Привет, мир!';
let reverseString = [];

for (let i = string.length - 1; i >= 0; --i) {
    reverseString += string[i];
}
console.log(reverseString);


let roadMines = [true, false, true, false, true, true, true, true, true, true];
let mine = true;
let damage = 0;


// for (let index in roadMines) {
//     let position = parseInt(index) + 1;
//         if (roadMines[index] === mine) {
//             if (damage < 1) {
//                 console.log(`танк переместился на ${position}`);
//                 console.log('Танк повреждён');
//                 damage++;
//             } else if (damage < 2) {
//                 console.log(`танк переместился на ${position}`);
//                 console.log('Танк уничтожен');
//                 break;
//             }
//         } else {
//             console.log(`танк переместился на ${position}`);
//         }
//     }

for (let position in roadMines) {
    console.log(`Танк переместился на позицию ${parseInt(position) + 1}`);
    if (roadMines[position] === mine && damage < 1) {
        console.log('Танк повреждён');
        damage++;
    } else if (roadMines[position] === mine && damage < 2) {
        console.log('Танк Уничтожен');
        break;
    }
}


let numberDaysOfMonth = [];
let countDaysOfMonth = 31;
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let firsOfJanuary = 'Четверг';
let start = 0;

for (let i = 0; i < countDaysOfMonth; ++i) {
    numberDaysOfMonth[i] = i + 1;
}

switch (firsOfJanuary) {
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
let i = 0;
while (i < countDaysOfMonth -1) {
    for (let j = 0; j < daysOfWeek.length ; ++j) {
        console.log(`${numberDaysOfMonth[i]} января ${daysOfWeek[(j + start) % daysOfWeek.length]}`);
        if (i < countDaysOfMonth -1) {
            i++;
        } else {
            break;
        }
    }
}
