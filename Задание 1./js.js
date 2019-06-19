'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько это все обойдется?", "");
    
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) && typeof(b) != null
        && a != "" && b != "" && a.length < 20) {
        console.log('done');
        appData.expenses[a] = b;
        // когда пользователь вводит данные оно попадет в перемунную и записывается как свойство объекта expenses;
    } else {
        console.log("bad result");
        i--;
    }
};



appData.moneyPerDay = appData.budget/30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 3000) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 3000 && appData.moneyPerDay < 10000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 10000) {
    console.log("Уровень достатка выше среднего");
} else {
    console.log("Произошла ошибка");
};

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько это все обойдется?", "");
    
//     if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 20) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }

//     i++;
// };

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце: ", ""),
//         b = prompt("Во сколько это обойдется?", "");
    
//     if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 20) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad result");
//         i--;
//     }
//     i++;
// }
// while(i < 2);