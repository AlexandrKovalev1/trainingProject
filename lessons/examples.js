/* 
    Вычисление дискриминанта и решение квадратного уравнения.
    a*x*x + b*x + c = 0
    Даны параметры a, b  и с для квадратного уравненияю
    Нужно вывести возможные значения x для этого уравнения.
    */

    let a = 3;
    let b = 5;
    let c = 10;

    let d = b * b - 4 * a * c;

    /* 
        Старое решение 
        let dRoot = Math.sqrt(d);
        console.log('x1 = ', (-b + dRoot) / (2 * a));
        console.log('x2 = ', (-b + dRoot) / (2 * a));
    */

    if (d < 0) {
        console.log('Квадратное уравнение не имеет решений');
    } else if(d === 0) {
        let x = -b / (2 * a);
        console.log('Квадратное уравнение имеет одно решение, x = ' + x);
    } else {
        let dRoot = Math.sqrt(d);
        let x1 = (-b + dRoot) / (2 * a);
        let x2 = (-b + dRoot) / (2 * a);
        console.log(`Квадратное уравнение имеет 2 решения\n:x1 = ${x1}\n:x2 = ${x2}`); 
    }                                                                               /*Квадратное уравнение имеет 2 решения
                                                                                      :x1 = -0.20245938823302131
                                                                                      :x2 = -0.20245938823302131*/

let day = 'Вторник';

switch (day) {
    case 'Понедельник':
    case 'Вторник':
    case 'Среда':
    case 'Четверг':
    case 'Пятница':
        console.log(day + ' - это будний день');
        break;
    case 'Суббота':
    case 'Воскресенье':
        console.log(day + ' - это выходной');
        break;
    default:
        console.log(day + ' - я не знаю такого дня недели');
}

/* 
    Определяем чётность числа
*/

let num =Math.round(Math.random() * 20);

if (num % 2 === 0) {
    console.log(num + ' - это чётное число');
} else {
    console.log(num + ' - это нечётное число');
}