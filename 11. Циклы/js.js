'use strict';

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }
// // в скобках условие, цикл while пока наша переменная будет < 55 будут выполнятся действия;

do {
    console.log(num);
    num++;
}
while(num < 55);
// do делает что то и потом цикл while осуществляет проверку;
// такой цикл необходим когда сначала нужно что то сделать, а потом проверить условие;

for(let i = 1; i < 8; i++) {
    if (i == 6) {
        // break
        continue
    }
    console.log(i);
}
// let i = 1 то с чего начнется цикл, i < 8 то на чем он остановится, i++ какие будут действия;
// 0, пустая строка, undifined, null, NaN это все false;
// в данному случае если цикл доходит до 6 то он останавливается командой break;
// continue позволяет пропустить определенный элемент;