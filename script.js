"use strict";

let money = +prompt('Ваш бюджет на месяц?',""),
    time = prompt('Введите дату в формате YYYY-MM-DD',"");

let appData ={
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};

for  (let i=0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце',""),
        b = prompt('Во сколько обойдется?',"");

    if ( (typeof(a))==='string' && (typeof(a))!=null && (typeof(b))!=null && a !='' && b !='' && a.length < 50) {
     
        console.log("done");
        appData.expenses[a] = b;
    }else {
        console.log ("bad result");
        i--;
        }
}


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
    
appData.moneyPerDay = appData.budget/30;


alert("Ежедневный бюджет: " + appData.moneyPerDay);

console.log(appData);

if (appData.moneyPerDay < 100){
    console.log("min");
}else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000){
    console.log("norm");
}else if(appData.moneyPerDay >2000){
    console.log("good");  
}else {
    console.log("eror");  
}