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
    savings: true
};

// получаем информацию о расходах 
function chooseExpenses(){
    for  (let i=0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце',""),
         b = +prompt('Во сколько обойдется?',"");

        if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50) {
     
        console.log("done");
        appData.expenses[a] = b;
        }else {
        console.log ("bad result");
        i = i - 1;
        }
    }
}
chooseExpenses();

// Получение информации о необязательных расходах 
function firstData(firstOptExp, secondOptExp){
        for (let i=1; i < 4; i++){

            let b = prompt('Статья необязательных расходов?',"");
            // alert(i+ ":" + b);
            appData.optionalExpenses [i] = b;
        }

}
firstData();
// chooseOptExpenses();

// Расчет бюджета на день 
function detectedDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectedDayBudget();
console.log(appData);

// Расчет достатка человека(образно)
function detectedLevel(){
        if (appData.moneyPerDay < 100){
            console.log("min");
        }else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("norm");
        }else if(appData.moneyPerDay >2000){
             console.log("good");  
        }else {
            console.log("eror");  
        }
}
// detectedLevel();

// Получение информации о депозите
function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма накопления?'),
            percent = +prompt('Под какой процент?');
            
        appData.monthIncome = save/100/12*percent;
        alert('Доход с депозита(месяц): '+appData.monthIncome);
    }
}

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
    