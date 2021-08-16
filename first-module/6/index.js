// Task 1
// const existedUserLogin = "the_best_user";
// const existedUserPassword = "12345678";

// let userLogin = prompt("Введите логин").trim();
// let userPassword = prompt("Введите пароль").trim();
// console.log('userLogin', userLogin);
// console.log('userPassword', userPassword);

// function Compare(login, pass) {
//     if (login === existedUserLogin && pass === existedUserPassword) {
//         alert(`Добро пожаловать, ${userLogin}!`)
//     }
//     else {
//         alert('Логин и (или) Пароль введены неверно!')
//     }
// }
// Compare(userLogin, userPassword);

//Task 2
// for(let i = 0;i<3;i+=1){
//     let newStudent = prompt('Please enter new students name').trim();
//     if (newStudent) {
//         alert(`Welcome ${newStudent}!`)
//     }
// }
// variant 1 - while
// let i = 0;
// while (i < 3) {
//     let newStudent = prompt('Please enter new students name');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Welcome ${newStudent}!`)
//     }
//     i++
// }
// // variant 2 - do while
// let i = 0;
// do {
//     let newStudent = prompt('Please enter new students name');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Welcome ${newStudent}!`)
//     }
//     i++
// } while (i < 3);

//Task 3

// let i = 0;
// let sum = 0;
// while (i <= 100) {
//     sum +=i;
//     i++;
// }
// alert('final sum', sum);

// let sum = 0;
// for(let i=0; i<=100; i++){
//     sum=sum+i;
// }
// alert(sum);

// let sum = 0;
// let i = 0;
// do{
//     sum +=i;
//     i++;
// }while(i<=100);
// alert(sum);


//Task 4
// В тесте всего 5 вопросов:

// Сколько будет 2 + 2?
// Сколько будет 2 * 2?
// У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. 
// Сколько яблок у Пети осталось?

// У Маши было 10 конфет. 2 она съела, 1 отдала другу. 
// После мама дала Маше еще 5 конфет. 
// Сколько в итоге конфет осталось у Маши?

// Сколько будет 2 + 2 * 2?

// Вам необходимо помочь ученикам начальных классов, поэтому сделаем для них тест, 
// который проверит их знания математики.

// Каждый вопрос и заранее подготовленный правильный ответ 
// (ответы должны быть типом данных number) сохраняйте в переменные. 
// Вопросы выводите с помощью функции prompt и также сохраняйте значение введенные 
// пользователем в отдельные переменные. 

// Если ответ был дан правильно, то отобразите сообщение “Ответ Верный” при помощи alert, 
// иначе - “Ответ Неверный”. 
// Если даже ответ был дан неправильно, 
// то пользователь все равно должен быть перенаправлен на следующий вопрос.


// Также вам необходимо вести счет правильных и неправильных ответов. 
// Сохраняйте эти данные в переменные correctAnswers и incorrectAnswers соответственно. 
// После выполнения теста с помощью alert выведите сообщение “Конец теста! 
// Правильные ответы - correctAnswers; 
// Неправильные ответы - incorrectAnswers.” 
// (замените correctAnswers и incorrectAnswers на итоговые значения).


// Примечание: учтите, что prompt возвращает тип данных string, 
// а значения, которые должны хранится в переменных с ответами - это тип данных number.
const question1 = 'Сколько будет 2 + 2?';
const question2 = 'Сколько будет 2 * 2?';
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу.Сколько яблок у Пети осталось?'
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу.После мама дала Маше еще 5 конфет.Сколько в итоге конфет осталось у Маши?'
const question5 = 'Сколько будет 2 + 2 * 2?';
const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 1;
const correctAnswer4 = 12;
const correctAnswer5 = 6;
let correctCount = 0;
let incorrectCount = 0;

alert('Давайте начнем тест!');
let answer1 = Number(prompt(question1));
let answer2 = Number(prompt(question2));
let answer3 = Number(prompt(question3));
let answer4 = Number(prompt(question4));
let answer5 = Number(prompt(question5));
let qArray = [question1,question2,question3,question4,question5];
let aArray = [answer1,answer2,answer3,answer4,answer5];
let cArray = [correctAnswer1,correctAnswer2,correctAnswer3,correctAnswer4,correctAnswer5];

function Comparison(userAnswer, expectedAnswer){
    if(Number(userAnswer) === expectedAnswer){
        // alert('Oтвет Верный!')
        correctCount +=1;
        return correctCount;
    }
    else{
        // alert('Ответ Неверный!')
        incorrectCount+=1;
        return incorrectCount;
    }
}

for(let i=0; i<qArray.length; i++){
    Comparison(aArray[i],cArray[i]);
}
let totalCorrect = correctCount;
let totalIncorrect = incorrectCount;

alert(`Конец теста! Правильные ответы - ${totalCorrect}. Неправильные ответы - ${totalIncorrect}`);


//Task 5

// const clientName = 'Igor';
// let clientSpentForAllTime = 110;
// let clientSpentToday = 25;
// clientSpentForAllTime +=clientSpentToday;
// let discount;

// function discountCount(clientSpentForAllTime){
//     if(clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
//        discount = 10;
//        alert(`Вам предоставляется скидка в ${discount}%!`);
//        return discount;
//     }
//     else if(clientSpentForAllTime>300 && clientSpentForAllTime<500){
//         discount = 20;
//         alert(`Вам предоставляется скидка в ${discount}%!`);
//         return discount;
//     }
//     else if(clientSpentForAllTime>500){
//         discount = 30;
//         alert(`Вам предоставляется скидка в ${discount}%!`);
//         return discount;
//     };
// }

// function clientDiscount(clientName,clientSpentToday,clientSpentForAllTime){
//     discount = discountCount(clientSpentForAllTime,clientSpentToday);
//     clientSpentToday = clientSpentToday*(1-discount/100);
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. 
//     За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
// }
// clientDiscount(clientName,clientSpentToday,clientSpentForAllTime);

//Task 6

// let clientName = prompt('Введите имя клиента').trim();
// let clientSpentForAllTime = Number(prompt('Сколько клиент потратил за все время?'));
// let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?'));
// clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
// let discount;


// function discountCount(clientSpentForAllTime){
//     if(clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
//         console.log('typeof clientSpentForAllTime', typeof clientSpentForAllTime);
//        discount = 10;
//        alert(`Вам предоставляется скидка в ${discount}%!`);
//        return discount;
//     }
//     else if(clientSpentForAllTime>300 && clientSpentForAllTime<500){
//         discount = 20;
//         alert(`Вам предоставляется скидка в ${discount}%!`);
//         return discount;
//     }
//     else if(clientSpentForAllTime>500){
//         discount = 30;
//         alert(`Вам предоставляется скидка в ${discount}%!`);
//         return discount;
//     };
// }

// function clientDiscount(clientName,clientSpentToday,clientSpentForAllTime){
//     if(typeof clientSpentForAllTime === "number" && typeof clientSpentToday === "number"){
//         discount = discountCount(clientSpentForAllTime,clientSpentToday);
//         clientSpentToday = clientSpentToday*(1-discount/100);
//         alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. 
//         За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
//     }
//     else {
//         alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку')
//     }
// }
// clientDiscount(clientName,clientSpentToday,clientSpentForAllTime);

//Task 7

// let password = prompt('Введите пароль');

// function checkLength(str){
//     if(str.length>3 && str.length<20) {
//         return true;
//     }
//     else return false;
// }

// function checkNumber(str){
//     return /\d/.test(str) === true;
// }
// function checkCase(str){
//     return str.toLowerCase() != str;
// }

// function passValidator(str){
//     if(!str){
//        alert('Restart the page and enter password');
//     }
//     else if(checkLength(str)&&checkNumber(str)&&checkCase(str)){
//         alert('Пароль валидный. Добро пожаловать в аккаунт!');
//     }
//     else{
//         alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.');
//     }
// }
// passValidator(password);


