var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = `<div>valid</div>`
    return true;
}
function validateNumber(){
    var phone = document.getElementById('contact-number').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only should be numbers';
        return false;
    }
    phoneError.innerHTML =  `<div>valid<div>`;
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML =  `<div>valid</div>`;
    return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(message.length == 0){
        messageError.innerHTML = 'Fill something';
        return false;
    }

    if(left > 0){
        messageError.innerHTML = left + ' more charecters required';
        return false;
    }
    messageError.innerHTML = `<div>valid</div>`;
    return true;
} 

function validateForm(){
    if(!validateName() || !validateNumber() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}