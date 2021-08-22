const form = document.querySelector('.form');
console.log(form.querySelector('.from'))
let password = form.querySelector('.password').value;
let passwordRepeat = form.querySelector('.passwordRepeat').value;
let messageTextarea = form.querySelector('.textarea').value;
let validateBtn = form.querySelector('.validateBtn');
let fields = form.querySelectorAll('.field');



let createErrorMessage = function (text) {
    let errMessage = document.createElement('div');
    errMessage.classList.add('error');
    errMessage.innerHTML = text;
    return errMessage;
}

let removeErros = function () {
    let errors = form.querySelectorAll('.error')

    for(let i =0; i < errors.length; i++) {
        errors[i].remove();
    }
}

let checkFieldsPresence = function() {
    for(let i = 0; i < fields.length; i++) {
        if(!fields[i].value) {
            let error = createErrorMessage('Ничего не ввели')
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
}

let checkPasswordMatch = function() {
        if(password !== passwordRepeat) {
            let error = createErrorMessage('Пароль не совпадает')
            passwordRepeat.parentElement.insertBefore(error, passwordRepeat );
        }  
}

let validateForm = (event) => {
    event.preventDefault();
    removeErros();
    checkFieldsPresence();
    checkPasswordMatch();
}



form.addEventListener('submit', validateForm);