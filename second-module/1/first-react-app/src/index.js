import React from 'react';
import ReactDom from 'react-dom';

const element = <h1>Hello World, my name is Yana Yana</h1>;
console.log(element);

ReactDom.render(element, document.getElementById('root'));
if (module.hot) {
    module.hot.accept();
}