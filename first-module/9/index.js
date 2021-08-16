// Task 1
// const getSumOfSequence = function(number){
//     let myArray = [];
//     for(let i=1;i<=number;i++){
//         myArray.push(i);
//     }
//     return myArray[0]+myArray[number-1];
// }

// console.log(getSumOfSequence(5));
// console.log(getSumOfSequence(15));
// console.log(getSumOfSequence(3));

//Task 2

// const peopleWaiting = ['Kristina', 'Oleg', 'Kirill', 'Maria', 'Svetlana', 'Artem', 'Gleb'];
// const giveParcel = function(array){
//         let count = array.length;
//         let myReceivedParcel = array.splice(0,3);
//         myReceivedParcel.forEach((element) => {
//             count--;
//             alert(`${element} получил(а) посылку.В очереди осталось ${count} человек.`);
//          } )
// }

// const leaveQueueWithoutParcel = function(array){
//     for(let i = array.length; i>0;i--) {
//         let name = array.pop(array);
//         alert(`${name} не получил(а) посылку и ушел(ла) из очереди`);
//       }
// }
// giveParcel(peopleWaiting);
// leaveQueueWithoutParcel(peopleWaiting);




//Task 3

// const myArr = [10, 4, 100, -5, 54, 2];

// // Через цикл for
// let sum1 = 0;
// for(let i = 0; i<myArr.length;i++){
//     sum1 = sum1 + myArr[i]**3;
// }
// console.log('sum1', sum1);

// // Через цикл for of
// let sum2 = 0;
// for(item of myArr){
//     sum2 = sum2 + item**3;
// }
// console.log('sum 2', sum2);

// // Через метод forEach
// let sum3 = 0;
// myArr.forEach(item => {
//     sum3 = sum3 + item**3;
// });
// console.log('sum 3', sum3);
   
// // Через метод reduce
// let sum4 = myArr.reduce((acc, item) => {
//     return acc+item**3;
// },0)
// console.log('sum4', sum4);

//Task 4 

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
 
// let coffeeName = prompt('Поиск кофе по названию:');
// const checkCoffee = function(array, searchWord){
//     if(array.includes(searchWord)){
//         let number = array.indexOf(searchWord);
//         alert(`Держите ваш любимый кофе - ${searchWord}. Он ${number} по популярности в нашей кофейне.`);
//     }
//     else{
//         alert('К сожалению, такого вида кофе нет в наличии');
//     }
// }
// checkCoffee(coffees, coffeeName);

//Task 5

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];
// let updatedPrices = prices.map((price) => {
//     return price+0.5;
// });
// const alertNewPrices = function(coffees,updatedPrices){
//     coffees.forEach((coffee)=>{
//       let count = coffees.indexOf(coffee);
//       alert (`Кофе ${coffee} сейчас стоит ${updatedPrices[count]} евро`);
//     })
// }
// alertNewPrices(coffees,updatedPrices);

//Task 6


let clientsEstimations = [];

// function askClientToGiveEstimation(){
    
// }
// function askClientToGiveEstimation(clientsEstimations){
// for(let i=0; i<5;i++){
//     let answer = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
//     if(answer>=1  && answer <=10){
//         clientsEstimations.push(answer);
//     }
// }
// return clientsEstimations;
// }

// function filterReviews(array){
//   let positiveReviews = array.filter(element => element > 5).length;
//   let negativeReviews = array.filter(element => element <=5).length;
//   alert(`Всего положительных оценок: ${positiveReviews}`);
//   alert(`Всего отрицательных оценок: ${negativeReviews}`);
// }

// filterReviews(askClientToGiveEstimation(clientsEstimations));

//Task 6 - one function

// let clientsEstimations = [];

// function oneFilterFunction(array){
//     for(let i=0; i<5;i++){
//         let answer = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?'));
//         if(answer>=1  && answer <=10){
//             array.push(answer);
//         }
//     }
//     let positiveReviews = array.filter(element => element > 5).length;
//     let negativeReviews = array.filter(element => element <=5).length;
//     alert(`Всего положительных оценок: ${positiveReviews}`);
//     alert(`Всего отрицательных оценок: ${negativeReviews}`);
// }

// oneFilterFunction(clientsEstimations);

//Task 6 - add callback to array.filter


//Task 7

// - Выведите в модальном окне через alert сообщение “Самый результативный матч был под номером number. 
// В нем было забито numberOfGoals гол(ов).” (замените number на порядковый номер матча, 
// а numberOfGoals - на количество голов в самом результативном матче).
const goals = [8, 1, 1, 3, 2, -1, 5];

const bestMatch = function(arr){
    let numberOfGoals = Math.max(...arr);
    let number = arr.indexOf(Math.max(...arr));
    console.log('numberOfGoals', numberOfGoals);
    console.log('number', number);
    alert(`Самый результативный матч был под номером ${number}.В нем было забито ${numberOfGoals} гол(ов).`)
}
bestMatch(goals);

// - Самые нерезультативные игры. 
// Их в массиве несколько, поэтому вам требуется вывести через alert сообщение 
// “Самые не результативные матчи были под номерами numbers. 
// В каждом из них было забито по numberOfGoals мячу(а).” 
// (замените numbers на порядковые номера матчей и отобразите их через запятую, а numberOfGoals 
// - на количество голов в самом не результативном матче). 
// Не берите в учет игры с автоматическим поражением.
const worstMatch = function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0 && arr[i]<2){
           alert(`Самые не результативные матчи были под номерами ${i}. В каждом из них было забито по ${arr[i]} мячу(а).`);
        }
    }
}
worstMatch(goals);

// - Общее количество голов за сезон. 
// Не берите в учет игры с автоматическим поражением. 
// Выведите сообщение через alert “Общее количество голов за сезон равно numberOfGoals” 
//(замените numberOfGoals на число общее количества голов за сезон).

const averageScore = goals.filter(el=>el>0).reduce((acc,element)=>acc+element);
console.log(averageScore);


// - Были ли автоматические поражения. 
// Если были, то выведите сообщение через alert “Были автоматические поражения: да”, 
// иначе  “Были автоматические поражения: нет”.

const anyLoses = function(arr){
    let result = arr.some((element)=>element<0);
    if(result === true){
        alert("Были автоматические поражения: да");
    } else{alert("Были автоматические поражения: нет");}
}
anyLoses(goals);


// - Среднее количество голов за матч. 
// Выведите сообщение через alert “Среднее количество голов за матч равно numberOfGoals” 
// (замените numberOfGoals на среднее количество голов за матч).

//Variant 1 - 
const averageScorePerGame1 = function(arr){
    let sum =0;
    let average;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
           sum = sum+arr[i];
           console.log('arr[i]', arr[i]);
        }
      average = Math.round(sum/arr.length);
    }
    alert(`Среднее количество голов за матч равно ${average}`);
}
averageScorePerGame1(goals);
//Variant 2 - 
const averageScorePerGame2 = Math.round(goals.filter(el=>el>0).reduce((acc,element)=>acc+element)/goals.length);
alert(`Среднее количество голов за матч равно ${averageScorePerGame2}`);

// - Отсортируйте голы в порядке возрастания и выведите все результаты через запятую в модальном окне alert. 
// Массив goals не должен быть изменен.
const sortedArray = function(arr){
   let newArr = arr.sort((a,b)=>{return a-b});
   alert(`Sorted goals for all matches: ${newArr}`)
}
sortedArray(goals);

