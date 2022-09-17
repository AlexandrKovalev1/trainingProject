let a = [];
for (let i = 0; i < 10; ++i) {
    a.push(parseInt(i) + 1);
}
console.log(a);

let b = [];

for (let pow2 of a) {
    b.push(pow2 * 2);
}
console.log(b);

let lines = [];
let next;

while (next = file.nextLine()) {
    lines.push(next);
}

for (let line of lines) {
    console.log('Длина строки', line.lenght);
}

for (let number in lines) {
    console.log(`Длина строки ${number}: ${lines[number].lenght}`);
}

// Пройтись с конца массива 
let aReversed = [];
for (let i = a.length - 1; i > 0; --i) {
    aReversed.push(a[i]);
}
 
// Сложная логика выхода из цикла
let currentAttempt = 0;
while (currentAttempt++ < 1000) {
    if(crazyfishWhistles()) break;
}

// Обработка нескольких массивов одинаковой длинны

for (let i in a) {
    console.log(a[i] + aReversed[i]);
}

for ( let i = 0; i < a.length; ++i) {
    console.log(a[i] + aReversed[i]);
}