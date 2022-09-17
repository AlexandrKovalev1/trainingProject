let i;

console.log('Цикл for');

for (i = 0; i < 11; i += 2) {
    console.log(i);   // 0, 2 ,4,6,8, 10
}

console.log('Цикл While');

i = 0;
while (true) {
    if(i > 10) break;
    console.log(i);
    i += 2;                     //0 , 2 , 4, 6 ,8 ,10
}
