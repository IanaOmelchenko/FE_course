import img from "./assets/witches.jpg";
import "./index.css";

console.log('Hello World!');
const h1 = document.createElement('h1');
h1.classList.add('main-header');
h1.textContent = 'I love JavaScript';
let body = document.querySelector('body');
const addImage = document.createElement('img');
addImage.className = 'image';
addImage.src = img; 
body.prepend(h1);
body.append(addImage);
