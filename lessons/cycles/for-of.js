let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];

console.log('Я сегодня съел');

for (let fruit of fruits) {
    console.log(fruit);
}
let raiting = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];

console.log('Рейтинг студентов');
for (let i in raiting) {
    console.log(`${parseInt(i) + 1} место: ${raiting[i]}`)
}

// parseInt преобразует строку в число