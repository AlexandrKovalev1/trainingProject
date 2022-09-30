let n = -3;
let m = -10;
let count = 42;
let range = Math.abs(m - n);
let minPozition = Math.min(m, n);
 // случайное число = округление(случайное число от 0 * абсолютного (диапазон) + минимальный порог)

let array = [];

/*for (let i = 0; i < count; ++i) {
    array.push(Math.round((Math.random() * range) + minPozition));
}*/

/*while (array.length < count) {
    array.push(Math.round((Math.random() * range) + minPozition));
}*/
/*for (let i = 0; i < count; ++i) {
   array[i] = Math.round((Math.random() * range) + minPozition);
}*/
for (let i = 0; i < count; ++i) {
    array[i] = i + 1;
}
for (let index in array) {
    array[index] = Math.round((Math.random() * range) + minPozition); 
}


let string = '"/"';
let reverseString = '';
/*for (let i = 0; i < string.length; ++i) {
    reverseArray.unshift(string[i]);
}
let reverseString = reverseArray.toString();*/
for (let i = string.length - 1; i >= 0 ; i--) {
    reverseString += string[i];
}

let roadMines = [false, true, false, true, false, false, true, false, false, false];
let mine = true;
let damage = 0;
for (let position in roadMines) {
  console.log(`Танк переместился на позицию ${parseInt(position) +1}`);
  if (roadMines[position] === mine && damage < 2) {
    console.log('Танк повреждён');
    damage++;
  } else if (roadMines[position] === mine && damage < 3) {
    console.log('Танк Уничтожен');
    break;
  }
}

let daysOfMonth = [];
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < 31; ++i) {
    daysOfMonth[i] = [i + 1];
}
let dayOfWeek = 'Пятница';
let start = 0;
switch (dayOfWeek) {
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
console.log(daysOfMonth.length);
let i = 0;
while(i < daysOfMonth.length - 1) {
    for (let j = 0; j < daysOfWeek.length; ++j) {
        let index = (j + start) % daysOfWeek.length;
        console.log(`${daysOfMonth[i]} января ${daysOfWeek[index]}`);
        if (i < daysOfMonth.length -1) {
            i++;
        } else {
            break;
        }
    }
}
 