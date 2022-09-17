let password = 'sm_8';

if (password.length > 3 && (password.includes('_') || password.includes('-'))) {
    console.log('Пароль надёжный');
} else {
    console.log('Пароль не достаточно надёжный');
}



let name = 'aLexAndR';
let surname = 'koVAlEv';

let nameNormalize = name.substr(0,1).toUpperCase() + name.substr(1).toLowerCase();
let surnameNormalize = surname.substr(0,1).toUpperCase() + surname.substr(1).toLowerCase();

console.log(name === nameNormalize ? 'Имя не было преобразовано' : 'Имя было преобразовано');
console.log(surname !== surnameNormalize ? 'фамилия была преобразована' : 'фамилия не была преобразована');