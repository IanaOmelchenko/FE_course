//Task 1

// function getName1(name){
//     return `Имя равно ${name}`;
// }
// console.log(getName1("Masha"));

// const getName2 = function(name){
//     return `Имя равно ${name}`;
// }
// console.log(getName2("Masha2"));

// getName3=name=>`Имя равно ${name}`;
// console.log(getName3("Masha3"));


//Task 2
// function getSumOfNumbers(num, type){
//     let sum = 0;
//     if(type === 'odd'){
//       for(let i = 1; i<=num; i+=2){
//            sum = sum+i;
//      }
//      return sum;
//     }
//     else if(type === 'even'){
//         for(let i = 0; i<=num; i+=2){
//             sum+=i;
//          }
//          return sum;
//     }
//     else{
//         for(let i = 0; i<=num; i++){
//             sum+=i;
//         }
//         return sum;
//     }
// }

// console.log(getSumOfNumbers(10,'odd'));
// console.log(getSumOfNumbers(10, 'even'));
// console.log(getSumOfNumbers(10, ''));

//Task 3
// function getDivisors(number){
//     let count = 0;
//     for(let i = 0; i<=number; i++){
//         if(number%i === 0){
//             count ++
//         }
//     }
//     return count;
// }
// console.log(getDivisors(5));
// console.log(getDivisors(4));
// console.log(getDivisors(12));
// console.log(getDivisors(30));

//Task 4

// function checkQuestionAnswer(question, correctAnswer){
//     let getAnswer = prompt(question).trim().toLowerCase();
//     if(getAnswer === correctAnswer.toLowerCase()){
//         alert('Ответ верный');
//     }
//     else{
//         alert('Ответ неверный');
//     }
// }

// checkQuestionAnswer('is watermelon a fruit or a vegetable?', 'Fruit');
// checkQuestionAnswer('how many teeth does an adult have on average?', '32');
// checkQuestionAnswer('which is the world smallest bird?', 'Bee Hummingbird');

//Task 5
const checkTextOnErrorSymbol = function(text,errorSymbol,successCallback,errorCallback){
  let count = 0;
  for(let i = 0; i<text.length; i++){
      if(text[i]===errorSymbol){
         errorCallback(errorSymbol,i);
         count++
      }
  }
  if(count === 0){
    successCallback();
  }
}

const successCallback = function(){
    console.log("В данном тексте нет запрещенных символов");
}

const errorCallback = function(symbol,i){
    console.log(`Найден запрещенный символ "${symbol}" под индексом ${i}.`);
}

const myText = 'Hi! How are you? Havent seen you for a long time.';
checkTextOnErrorSymbol(myText, 'y', successCallback, errorCallback);