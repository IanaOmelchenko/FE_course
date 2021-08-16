// Задание 1

setTimeout(() => {
 console.log('setTimeout');
}, 0); //4
 
const promise = new Promise((resolve) => {
 console.log('Promise');
 resolve();
}); //1
 
promise.then(() => {
 console.log('Promise resolve');
});  //3
 
console.log('End'); //2

//Promise
//End
//Promise resolve
//setTimeout

// Задание 2


function runCode() {
 console.log('before promise') //1
 return new Promise((resolve) => {
   setTimeout(() => {
     console.log('Zero Promise') //4
 
     resolve()
   }, 0)
 })
}
 
setTimeout(() => {
 console.log('Zero')
}, 0) //3
 
runCode().then(() => console.log('Zero Promise Invoked')) //5
 
console.log('One') //2

//before promise
//One
//Zero
//Zero Promise
//Zero Promise Invoked

// Задание 3

const getData = (callback) => {
 fetch('https://jsonplaceholder.typicode.com/users/1')
   .then((response) => response.json())
   .then((user) => {
     console.log('Success');
     callback(user); 
   })
   .catch((error) => {
     console.log(error); //never
   });
}
 
getData(() => {
 console.log('user received');
 
 const promise = new Promise((resolve) => {
   setTimeout(() => {
     resolve('promise resolved'); //micro //callback 2
   }, 500);
 
   console.log('in promise'); 
   setTimeout(() => {
     console.log('last set timeout'); //callback
   }, 400); 
 
 });
 
 promise.then((result) => {
   console.log(result);
 })
});
 
console.log('End') 

//End
//Success
//user received
//in promise
//last set timeout
//promise resolved
