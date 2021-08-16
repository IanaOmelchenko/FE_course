// Task 1

// const myName = 'Yana';
// const programmingLanguage = 'JavaScript';
// const courseCreatorName = 'Vladilen Minin';
// const reasonText = 'I like coding';
// const numberOfMonth = 25;

// let myInfoText =
//     `Всем привет! Меня зовут ${myName}.
// Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
// Я хочу стать веб - разработчиком, потому что ${reasonText}.
// До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев.
// Я уверен(а), что пройду данный курс до конца!`
// console.log(myInfoText);

// //Task 2

// const uPprogrammingLanguage = programmingLanguage.toUpperCase();
// console.log('after', myInfoText.replaceAll(programmingLanguage, uPprogrammingLanguage));
// console.log(myInfoText.length);
// console.log('first character', myInfoText[0], 'last character', myInfoText[myInfoText.length - 1]);

//Task 3

// const userName = prompt('Как вас зовут?');
// alert(`Вас зовут ${userName.trim().toLowerCase()}`);

// // Task 4
// const userAge = prompt('Сколько вам лет?');
// console.log(Number(userAge.trim()));
// alert(`Вас зовут ${userName} и вам ${Number(userAge.trim())} лет`);

// Task 5
// let userString = prompt('Введите текст для обрезки');
// let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
// let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');

// console.log(userString, startSliceIndex, endSliceIndex);
// let newString = userString.trim().slice(Number(startSliceIndex), Number(endSliceIndex));
// alert(`Результат: ${newString}`);

//Task 6

// let userText = prompt('Введите текст');
// let wordFromText = prompt('Введите слово из текста');
// let trimmedString = userText.trim()
// let indexOfWord = trimmedString.indexOf(wordFromText.trim());
// let newText = trimmedString.slice(0, Number(indexOfWord));
// alert(`Результат: ${newText}`);

//Task 7

const javaScriptDescription = "JavaScript — мультипарадигменный язык программирования.Поддерживает объектно - ориентированный,императивный и функциональный стили.Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."
let sliceEnd = Math.floor(javaScriptDescription.length / 2);
let newJSDescription = (javaScriptDescription.slice(0, sliceEnd));
let newJSDescriptionFinal = newJSDescription.replaceAll('а', 'А').replace('a', 'A').trim().repeat(3);
console.log(Math.floor(newJSDescriptionFinal.length / 2));



