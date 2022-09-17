true === true; // true
true !== true; // false
true === false; // false
true !== false; // true

"строка" === 'строка'; // true
'строка' === `строка`; // true
"строка" === `строка`; // true

"строка" === 'строка' === `строка`; // false  (true != `строка`)

'строка1' !== 'строка2'; // true

// === и !== всегда вернёт false  при сравнении разных типов
false !== 0;
true !== 1;
0 !== '';
3 !== '3';
false !== '';
true !== 'true';

// Сравнение строк происходит по символьно по кодам символаб условно по алфавиту
'z' > 'a'; // 122 > 97
'az' > 'axzzz' // a === a, z > x, дальше не проверяем
'z' > 'Z'; // 122 > 90
'10' < '5'; // вот так сюрприз
'10' > '05'; // теперь норм

// не рекомендуется сравнивать значения разных типов

'10' > 5; // true
10 > '5'; // true
10 > 'x'; // false, 'x' не число (NaN)
10 < 'x'; // false, 'x' не число (NaN)


// true - 1; false - 0;
1 > false; // true, 1 > 0;
0 < true; // true, 0 < 1;
'10' > true; // true 10 > 1;
'1' > true; // false, 1 > 1;
'1' > false; // true, 1 > 0;
'x' > true; // false, NaN > 1;