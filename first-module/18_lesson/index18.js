import "./index.css";

console.log('Hello World');
let h1 = document.createElement('h1');
h1.textContent = 'Webpack and Rollup';
let body = document.querySelector('body');
body.append(h1);

const addImage = document.createElement('img');
addImage.className = 'js-image';
addImage.src = "./assets/IMG_4393.JPG"; 

body.append(addImage);