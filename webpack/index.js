import img from "./assets/witches.jpg";
import "./index.css";

console.log('Hello World!');

let body = document.querySelector('body');
const addImage = document.createElement('img');
addImage.className = 'image';
addImage.src = img;

body.append(addImage);