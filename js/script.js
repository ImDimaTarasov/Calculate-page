"use strict";

let money,time;
let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    btnExpensesItem = document.getElementsByTagName('button')[0],
    btnOptionalExpenses = document.getElementsByTagName('button')[1],
    btnCountBudget = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumChoose = document.querySelector('.choose-sum'),
    percentChoose = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    allBtns = document.querySelectorAll('button');

    btnExpensesItem.disabled = true;
    btnOptionalExpenses.disabled = true;
    btnCountBudget.disabled = true;

// Получаем информацию о бюджете и дате
startBtn.addEventListener('click',function(){
    time = prompt('Введите дату в формате YYYY-MM-DD',"");
    money = +prompt('Ваш бюджет на месяц?',"");

    while(isNaN(money) || money =="" || money == null){
        money = +prompt('Ваш бюджет на месяц?',"");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    btnExpensesItem.disabled = false;
    btnOptionalExpenses.disabled = false;
    btnCountBudget.disabled = false;
});

// получаем информацию о расходах 
btnExpensesItem.addEventListener('click',function(){
    let sum = 0;
    for (let i=0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        }else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
        sumExp = sum;
    }
});

//Считает бюджет на день
function calc(a,b){
    return ((a - b)/30);
}
let sumExp;

// Получение информации о необязательных расходах 
btnOptionalExpenses.addEventListener('click', function(){
    for (let i=0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses [i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + '  ';
    }
});

//Функция добавляет дневной бюджет в объект и выводит для пользователя информ. Расчет достатка человека(образно)
btnCountBudget.addEventListener('click',function(){
    if (appData.budget != undefined){
        appData.moneyPerDay = calc(appData.budget,sumExp).toFixed();
        // appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 20){
              levelValue.textContent = "кичманский бомж";
        }else if (appData.moneyPerDay > 20 && appData.moneyPerDay < 50){
                levelValue.textContent = "жить будешь";
        }else if(appData.moneyPerDay < 100){
                levelValue.textContent = "ты с Польши приехал?";  
        }else {
               levelValue.textContent = "огого, да ты мульйонер";  
        }
    }else{
        daybudgetValue.textContent ="Ошибка";
    }
});
// Получаем информацию о дополнительном доходе
incomeItem.addEventListener('change', function() {
    let items = incomeItem.value;
    if (isNaN(items) || items != '') {
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
    } 
});
// Настраиваем чекбокс
checkSavings.addEventListener('click', function(){
        if(appData.savings == true){
            appData.savings = false;
        }else{
            appData.savings = true;
        }
});
// Считаем сумму накоплений и процент
sumChoose.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +sumChoose.value,
            percent = +percentChoose.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});
// Считаем сумму накоплений и процент
percentChoose.addEventListener('input', function(){
    if(appData.savings == true){
        let sum = +sumChoose.value,
            percent = +percentChoose.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);  
    }
});

// Расчет бюджета на день исходя из остатка после обязательных расходов
// Функция подсчета ежедневного блюджета. Бюджет на месяц минус сумма обязательного расхода поделенное на 30 дней



let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false,
};

// Функция суммирования обязательных расходов
// function sumExpenses(opCost){
//     let sum=0;
//     for( let key in appData.expenses){
//         sum += opCost[key];
//     }
//     return sum;
// }

// // Расчет бюджета на день 
// function detectedDayBudget(){
//     appData.moneyPerDay = (appData.budget/30).toFixed();
//     alert("Ежедневный бюджет: " + appData.moneyPerDay);
// }
// // detectedDayBudget();
