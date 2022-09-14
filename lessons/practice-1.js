/*
Вычисляем колличество квартир в доме.
Дано колличество подъездов, этажей и квартир на одном этаже.
Нужно вывести колличество квартир в одном подъезде и во всём доме.
*/

// кол-во подъездов
let entrances = 4;
// кол-во этажей
let floors = 9;
// колличество квартир на одном этаже
let flatsPerFloor = 4;

let flatsPerEntrance = floors * flatsPerFloor;
console.log(flatsPerEntrance);

let flatsInHouse = flatsPerEntrance * entrances;
console.log(flatsInHouse);

/* пропорции для рецепта кровавой Мерри.
Даны пропорции ингридиентов для Кровавой Мерри и обЪем напитка, который
нужно получить. Вычислить необходимый обЪем ингридиентов из этих данных.
*/

// ингридиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tobasko = 1;
let worcester = 1; 

// желаемый объем напитка
let volume = 500;

//коэфициент для получения объема ингридиента
let k = volume / (vodka + tomatoJuice + lemonJuice + tobasko + worcester);
console.log(vodka * k);


let n = 10;
let current = 0;
let prev = 1;
let prevPrev =0;

/*while (n-- > 0) {
    prevPrev = prev;
    prev = current;
    current += prevPrev;
    console.log(current);
}*/

while (n > 0) {
    prevPrev = prev;
    prev = current;
    current += prevPrev;
    console.log(current);
    n--;
}


