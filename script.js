"use strict";


let money = prompt('Ваш бюджет на месяц?');

let time = prompt('Введите дату в формате YYYY-MM-DD');
let expenses = prompt('Введите обязательную статью расходов в этом месяце');
let howMuch = prompt('Во сколько обойдется?');


let appData ={
    moneyData: money,
    timeData: time,
    expensesData: {
        whatToBuy:howMuch
    },
    optionalExpenses:0,
    income: [],
    savings: false,
    
};

let rest = (money - howMuch)/30;

alert(`Бюджет на день: ${rest}`);
