let password = 'qaz-';

if (password.length > 3 && (password.includes('-') || password.includes('_'))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль недостаточно надёжный');
}

let name = 'alExaNDr';
let surname = 'koVALev';

let nameNormalize = (name.substr(0 , 1)).toUpperCase() + (name.substr(1).toLowerCase());
let surnameNormalize = (surname.substr(0 , 1)).toUpperCase() + (surname.substr(1).toLowerCase());

name === nameNormalize ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
surname === surnameNormalize ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');


