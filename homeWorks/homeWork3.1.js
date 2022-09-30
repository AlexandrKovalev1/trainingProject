let password = 'qa_';

if (password.length > 4 && (password.includes('-') || password.includes('_'))) {
    console.log("Пароль надёжный");
} else {
    console.log('Пароль недостаточно надёжный');
}

let name = 'aLexAndR';
let surname = 'koVAlEv';

let nameNormalize = ((name.substr(0,1)).toUpperCase()) + (name.substr(1).toLowerCase());
let surnameNormalize = ((surname.substr(0,1)).toUpperCase()) + (surname.substr(1).toLowerCase());
console.log(surnameNormalize);

console.log(name === nameNormalize ? 'Имя не было преобразовано' : 'Имя было преобразовано');
console.log(surname !== surnameNormalize ? 'фамилия была преобразована' : 'фамилия не была преобразована');