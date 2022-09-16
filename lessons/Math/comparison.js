let x = 10;
let y = 20;

console.log(x === y); // false
console.log(x === 10); // true

console.log(x !== y); // true
console.log(y !== 20); // false

console.log(x > y); // false
console.log(y > 10); // true

Infinity // бесконечность больше всего в джава скрипте
-Infinity // -бесконечность меньше всего в джаваскрипте
// при делении на ноль в джаваскрипте будет Infinity

Infinity === Infinity; // true

Infinity > Infinity; // false
Infinity < Infinity; // false

Infinity >= Infinity; //true
Infinity <= Infinity; //true

Infinity + Infinity; // Infinity
-Infinity - Infinity; // -Infinity

Infinity - Infinity; // NaN O_o
-Infinity + Infinity; // NaN O_o
Infinity / Infinity; // NaN

Infinity / 10;// Infinity
Infinity * 10;// Infinity
Infinity ** 10;// Infinity
Infinity ** Infinity;// Infinity

Infinity ** -Infinity;// 0
(-Infinity) ** Infinity;// Infinity


/*
- Не используйте Infinity без явной необходимости!
-Всё, что делает бесконечность ещё более бесконечнойб возвращает бесконечность.
-Любые операции бесконечности с числом вернут бесконечность.
-Уменьшение бесконечности при делении или вычитании (прибавлении для отрицательной ) не работают.
-Две бесконечности равны.
- При делении на ноль даёт бесконечность
*/

