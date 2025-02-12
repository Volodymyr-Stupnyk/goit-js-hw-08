

 
const registerForm = document.querySelector('.login-form');
registerForm.classList.add('js-login-form');  




registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = registerForm.elements.email.value.trim();  
    const password = registerForm.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: email,
        password: password
    };
    console.log(formData);
    registerForm.reset();
    
};

const ladelElem = document.querySelectorAll('label');
for (let i = 0; i < ladelElem.length; i++) {
    ladelElem[i].classList.add('js-label-class');
};

const inputElem = document.querySelectorAll('input');
for (let i = 0; i < inputElem.length; i++) {
    inputElem[i].classList.add('js-input-class');
}

const buttonForm = document.querySelector('button');
buttonForm.classList.add('js-btn-form');


 
const passwordInput = document.querySelector('input[name="password"]');  
passwordInput.style.marginBottom = '16px';


