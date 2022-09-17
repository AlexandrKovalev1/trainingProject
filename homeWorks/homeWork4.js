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
let dayOfWeek = 'Понедельник';
for (let i = 0; i < 31; ++i) {
    daysOfMonth[i] = [i + 1];
}

for (let day of daysOfMonth) {
     
}


/*for (let i = 0; i < arr.length; i++) {
    let index = (i + start) % arr.length;
    console.log(arr[index]);
  }*/
