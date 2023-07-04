let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.navlinks');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('open');
}


const form = document.getElementById('form');
const username = document.getElementById('username');
const address = document.getElementById('address');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const addressValue = address.value;
    const cpfvalue = cpf.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === '') {
        setErrorFor(username, "o nome de usuario é obrigatório");
    } else {
        setSuccessFor(username);
    }

    if (addressValue === '') {
        setErrorFor(address, "o endereço de usuario é obrigatório");
    } else {
        setSuccessFor(address);
    }

    if (cpfvalue === '') {
        setErrorFor(cpf, "o cpf do usuário é obrigatório");
    } else {
        setSuccessFor(cpf);
    }

    if (emailValue === '') {
        setErrorFor(email, "o email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "insira um email valido");
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, "a senha é obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "a senha necessita de no minimo 7 caracteres.");
    } else {
        setSuccessFor(password);
    }

    if (passwordConfirmationValue === '') {
        setErrorFor(passwordConfirmation, "a confirmação da senha é obrigatória.");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "as senhas não conferem.");
    } else {
        setSuccessFor(passwordConfirmation);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}