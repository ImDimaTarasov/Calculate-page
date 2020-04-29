"use strict";

let money,time;

// Получаем информацию о бюджете и дате
function start(){
    money = +prompt('Ваш бюджет на месяц?',"");
    time = prompt('Введите дату в формате YYYY-MM-DD',"");

    while(isNaN(money) || money =="" || money == null){
        money = +prompt('Ваш бюджет на месяц?',"");
    }
}
start();
let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true,
    // получаем информацию о расходах 
    chooseExpenses: function(){
        for  (let i=0; i < 2; i++){
            let a = prompt('Введите обязательную статью расходов в этом месяце',""),
             b = +prompt('Во сколько обойдется?',"");
    
            if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50) {
         
            console.log("done");
            appData.expenses[a] = b;
            }else {
            console.log ("bad result");
            i--;
            }
        }
    },
    //Функция добавляет дневной бюджет в объект и выводит для пользователя информ.
    detectedDayBudget: function(){
        appData.moneyPerDay = calc(appData.budget,sumExpenses(appData.expenses)).toFixed();
        // console.log(calc(appData.budget,sumExpenses(appData.expenses)));
        alert("Ежедневный бюджет: " + calc(appData.budget,sumExpenses(appData.expenses)).toFixed());
    },
    // Расчет достатка человека(образно)
    detectedLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log("min");
        }else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
        console.log("norm");
        }else if(appData.moneyPerDay >2000){
             console.log("good");  
        }else {
            console.log("eror");  
        }
    },
    // Получение информации о депозите
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt('Какова сумма накопления?'),
                percent = +prompt('Под какой процент?');
                
            appData.monthIncome = save/100/12*percent;
            alert('Доход с депозита(месяц): '+appData.monthIncome);
        }
    },
    // Получение информации о необязательных расходах 
    chooseOptExpenses: function(){
        for (let i=1; i < 4; i++){
            let b = prompt('Статья необязательных расходов?',"");
            appData.optionalExpenses [i] = b;
        }
    },
    chooseIncome: function(){
        
        let items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');
        
        if((typeof(items)) != 'string' || items =='' || (typeof(items)) == null) {
            console.log("Данные введены не верно");
            
        }else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();

        }
        appData.income.forEach(function(item,i){
            alert("Способы доп. заработка: " + (i+1) + "." + item);
        });
    }
};

// // Расчет бюджета на день 
// function detectedDayBudget(){
//     appData.moneyPerDay = (appData.budget/30).toFixed();
//     alert("Ежедневный бюджет: " + appData.moneyPerDay);
// }
// // detectedDayBudget();

// Расчет бюджета на день исходя из остатка после обязательных расходов
    // Функция подсчета ежедневного блюджета. Бюджет на месяц минус сумма обязательного расхода поделенное на 30 дней
function calc(a,b){
    return ((a - b)/30);
}
//Функция суммирования обязательных расходов
function sumExpenses(opCost){
    let sum=0;
    for( let key in appData.expenses){
        sum += opCost[key];
    }
    return sum;
}

console.log(appData);


// checkSavings();

// ЦИКЛ №1
// let i = 0;

// do {
    
//     let a = prompt('Введите обязательную статью расходов в этом месяце',""),
//         b = prompt('Во сколько обойдется?',"");

//     if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50){
         
//         console.log("done");
//         appData.expenses[a] = b;
//     }else{
//         i--;
//     }

//     i++;
// }
// while( i < 2);


// ЦИКЛ №2
// let i = 0;
// while (i < 2){
    
//     let a = prompt('Введите обязательную статью расходов в этом месяце',""),
//         b = prompt('Во сколько обойдется?',"");
//     if ( (typeof(a))==='string' && (typeof(a))!=null && 
//        (typeof(b))!=null && a !='' && b !='' && a.length < 50){
     
//         console.log("done");
//          appData.expenses[a] = b;
//      }else{
//             i--;
//             }
//      i++;
// };
    