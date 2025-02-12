
const inputElem = document.querySelector('#name-input');
const outputElem = document.querySelector('#name-output');
const titleElem = document.querySelector('h1');
 
const divElement = document.createElement('div');  

divElement.appendChild(inputElem);  
divElement.appendChild(titleElem);
 
document.body.appendChild(divElement);  


titleElem.classList.add('js-title');
inputElem.classList.add('js-input');
divElement.classList.add('js-input-box');

inputElem.addEventListener('input', () => {   
    const trimValue = inputElem.value.trim();
    outputElem.textContent = trimValue.length > 0 ? trimValue : 'Ananymous';
});