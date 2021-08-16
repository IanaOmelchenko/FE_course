//Задание 1

function getDateFormat(date,separator){
    myDate = date.getDate();
    month = date.getMonth();
    if(date.getMonth()<10){
        month = "0"+date.getMonth();
    }
    if(date.getDate()<10){
        myDate = "0"+date.getDate();
    }
   return(`${`${myDate}`+`${separator}`+ `${month}`+`${separator}`+date.getFullYear()}`);
}

let date = new Date(92, 6, 1);
console.log(getDateFormat(date, '/'));

// Задание 2

let nextBirthdayDate = new Date(2022, 6, 15);

const getDaysBeforeBirthday = function(nextBirthdayDate){
    let today = new Date(2021, 7, 19);
    //new Date with no arguments returns June and not July
    console.log("now.getMonth", today.getMonth());
    let differenceInMs = nextBirthdayDate.getTime() - today.getTime();
    let diffInDays = Math.round(differenceInMs/(1000 * 3600 * 24));
    console.log(diffInDays);
    return diffInDays;
}
getDaysBeforeBirthday(nextBirthdayDate);

//Задание 3


const addDays = function(date,days=1){
    let ourDays = days * 24 * 60 * 60 * 1000;
    let updatedDate = date.getTime()+ourDays;
    return new Date(updatedDate);
}
let myDate=new Date();
console.log(addDays(myDate, 12));


