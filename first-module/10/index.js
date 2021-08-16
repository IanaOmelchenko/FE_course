// // Задание 1

// // const users = [

// //    {

// //        username: 'David',

// //        status: 'online',

// //        lastActivity: 10

// //    }, {

// //        username: 'Lucy',

// //        status: 'offline',

// //        lastActivity: 22

// //    }, {

// //        username: 'Bob',

// //        status: 'online',

// //        lastActivity: 104

// //    }

// // ]
// // let onlineUsers = users.filter((el)=>el.status === 'online');
// // alert(`Сейчас в онлайн следующие пользователи: ${onlineUsers[0].username}, ${onlineUsers[1].username}`);

// // Задание 2

// // const student = {

// //    fullName: 'Максим',

// //    experienceInMonths: 12,

// //    stack: ['HTML', 'CSS', 'JavaScript', 'React'],

// // }

// // const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

// // function giveJobToStudent(object, jobName){
// //   object.job = jobName;
// //   alert(`Поздравляем! У студента ${object.fullName} появилась новая работа! Теперь он ${jobName}`);
// // }

// // Задание 3

// // const handleObjects = function(obj, key, action){
// //     if(action === 'get'){
// //         return obj[key];
// //     }
// //     else if(action === 'add'){
// //         obj.key = '';
// //         return obj;
// //     }
// //     else if(action === 'delete'){
// //          delete obj[key];
// //          return obj;
// //     }
// //     else{
// //         return obj;
// //     }
// // }


// // const student = {
// //    name: 'Maxim',
// //    programmingLanguage: 'JavaScript',
// // }
 
// // const result = handleObjects(student, 'programmingLanguage', 'delete');
// // console.log('result', result);

// // Задание 4

// getKiller(
//     {
//         'James': ['Jacob', 'Bill', 'Lucas'],
//         'Johnny': ['David', 'Kyle', 'Lucas'],
//         'Peter': ['Lucy', 'Kyle'],
//     }, ['Lucas', 'Bill']
//  ); // Убийца James
  
//  getKiller(
//     {
//         'Brad': [],
//         'Megan': ['Ben', 'Kevin'],
//         'Finn': [],
//     },
//     ['Ben']
//  ); // Убийца Megan
 
//  // 1 - for + if
 
//  function getKiller(suspectInfo, dead) {
//       for (const suspect in suspectInfo) {
//           let count = 0;
//           for(let i = 0; i<dead.length; i++){
//               if(suspectInfo[suspect].includes(dead[i])){
//                   count ++;
//                   if(count===dead.length){   
//                       console.log('suspect', suspect);
//                   }
//               }
//           }
 
//       }
//    }
 
//  // 2 - map + if
 
//      function getKiller(suspectInfo, dead) {
//          for (const suspect in suspectInfo) {
//          let count = 0;
//             dead.map((body)=>{
//                  if(suspectInfo[suspect].includes(body)){
//                      count ++
//                      return count;
//                  }
//              })
//              if(count===dead.length){
//                  console.log(suspect);
//              }
//              }
//              }
 
//  // Задание 5
//      //With given randomizer ->
//      function getRandomNumberInRange(min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//      }
 
//         function getWinner(applicants, winnerObject){
//          let key = getRandomNumberInRange(0, Object.keys(applicants).length);
//          let winner = Object.values(applicants)[key];
//          let newObj = {
//              ...winnerObject,
//              ...winner,
//          }
//        return newObj;
//      }
 
 
//      //With different randomizer ->
//      function getRandomNumberInRange(arr) {
//          return Math.floor(Math.random() * Object.keys(arr).length);
//       }
 
//      function getWinner(applicants, winnerObject){
//          let keyNumber = getRandomNumberInRange(applicants);
//          let winner = Object.values(applicants)[keyNumber];
//          let newObj = {
//              ...winnerObject,
//              ...winner,
//          }
//        return newObj;
//      }
     
//      const todaysWinner = {
//         prize: '10 000$',
//      }
      
//      const winnerApplicants = {
//         '001': {
//             name: 'Максим',
//             age: 25,
//         },
//         '201': {
//             name: 'Светлана',
//             age: 20,
//         },
//         '304': {
//             name: 'Екатерина',
//             age: 35,
//         },
//      }
      
//      const resultWinner = getWinner(winnerApplicants, todaysWinner);
//      console.log('resultWinner', resultWinner); // { prize: '10 000$', name: 'Максим', age: 25 }
 
//  // Задание 6
     
 
//  //     function giveTalonsInOrder (patients, orders){
//  //         let newArray = [];
//  //         for(let i =0; i < patients.length; i++){
//  //             y = orders[i];
//  //             patients.find(function (patient) {
//  //                 if(patient.id === y){
//  //                     newArray.push(patient);
//  //                 };
//  //             })
 
//  //     }
//  //     return newArray;
//  // }
 
//  //     const ordersArr = [4, 2, 1, 3];
//  //     const people = [
//  //        { id: 1, name: "Максим" },
//  //        { id: 2, name: "Николай" },
//  //        { id: 3, name: "Ангелина" },
//  //        { id: 4, name: "Виталий" },
//  //     ];
      
//  //     const result = giveTalonsInOrder(people, ordersArr);
//  //     console.log('result', result);
//      /* Возвращает массив
//      [
//         { id: 4, name: 'Виталий' },
//         { id: 2, name: 'Николай' },
//         { id: 1, name: 'Максим' },
//         { id: 3, name: 'Ангелина' }
//      ]
//      */
 
//      // Alternative solution (easy and depends on patient id === position in the Array)
//     const giveTalonsInOrder = function(arr1, arr2){
//         let resultArr = [];
//         for(let i = 0; i<arr2.length; i++){
//             resultArr.push(arr1[arr2[i]-1]);
//         }
//         return resultArr;
//     }
 
     