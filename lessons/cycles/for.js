let fibo = [1, 1];

for (let i = 1; i < 49; i++) {
    fibo.push(fibo[i] + fibo[i - 1]); // [1, 1, 2, 3, 5, 8]
}

// цикл который никогда не завершится и повесит вашу программу
for (;;) console.log('Я буду сниться тебе в кошмарах');
// цикл который может завершится на любой итерации с вероятностью 10%
for(;Math.random() >= 0.1;) console.log('И ещё разок');
// выносим инициализатор за пределы цикла , а завершающую инструкцию в тело
let i = 10;
for(; i > 0;) {console.log('i = ' + i--); }
// вечный цикл считающий до бесконечности(на самом деле нет)
for (let i = 0;; ++i) {console.log(i);}