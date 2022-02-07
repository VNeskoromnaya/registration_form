const login = document.getElementById('login');
const email = document.getElementById('email');
const userName = document.getElementById('userName');
const phoneNum = document.getElementById('phoneNum');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeatPassword');
const btn = document.getElementById('btn');

// function validateInput(input) {
//     let pattern = input.attributes['pattern']?.value;
//     let isValid = true;
//     if (pattern) {
//         let regExp = new RegExp(pattern);
//         isValid = regExp.test(input.value);
//     }

//     if(isValid) {
//         let minLength = input.attributes['minLength']?.value;
//         if (minLength) {
//             isValid = (input.value.length >= new Number(minLength));
//         }
//     }

//     return isValid;
// }


function check(event) { 
    event.preventDefault();
    event.stopPropagation();

    document.getElementById('errorMessage').innerHTML = '';
    let isValid = true;

    // debugger;

    if(login.value == '') {
    // alert('Вы не заполнили поле "Логин"');
        isValid = false;
        document.getElementById('errorMessage').innerHTML += 'Вы не заполнили поле "Логин"<br>';
    } else if (!login.checkValidity()) {
        isValid = false;
    }

    if(email.value == '') {
        isValid = false;
    // alert('Вы не заполнили поле "Email"');
        document.getElementById('errorMessage').innerHTML += 'Вы не заполнили поле "Email"<br>';
    } else if (!email.checkValidity()) {
        isValid = false;
    }


    if(userName.value == '') {
        isValid = false;
        // alert('Вы не заполнили поле "Имя пользователя"');
        document.getElementById('errorMessage').innerHTML += 'Вы не заполнили поле "Ваше имя"<br>';
    } else if (!userName.checkValidity()) {
        isValid = false;
    }


    if(phoneNum.value == '') {
        isValid = false;
        // alert('Вы не заполнили поле "Номер телефона"');
        document.getElementById('errorMessage').innerHTML += 'Вы не заполнили поле "Номер телефона"<br>';
    } else if (!phoneNum.checkValidity()) {
        isValid = false;
    }


    if(password.value == '') {
        isValid = false;
        // alert('Вы не заполнили поле "Пароль"');
        document.getElementById('errorMessage').innerHTML += 'Вы не заполнили поле "Пароль"<br>';
    } else if (!password.checkValidity()) {
        isValid = false;
    }

    if (password.value != repeatPassword.value) {
        isValid = false;
        // alert('Пароли не совпадают');
        document.getElementById('errorMessage').innerHTML += 'Пароли не совпадают<br>';
    }

    if (isValid) {
        alert(`Добро пожаловать, ${userName.value}!`);
    }   
}

btn.addEventListener('click', check);