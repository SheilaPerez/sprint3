// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nameInput = document.querySelector('.name');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var address = document.querySelector('.address');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');
var errorEmail = document.getElementById('errorEmail');
var errorLastName = document.getElementById('errorLastName');  
var errorAddress = document.getElementById('errorAddress');  

// Exercise 6
function validate(event) {
    event.preventDefault();

    var alphaNumRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/
    var phoneRegex = /[0-9]{6,}/g
    var alphaRegex = /^[a-zA-Z]+$/
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if (!alphaNumRegex.test(password.value)) {
        errorPassword.style.display = "block";
        password.className = "errorColorRed";
    } else {
        password.className = "validGreen";
        errorPassword.style.display = "none";
    }

    if (!phoneRegex.test(phone.value)) {
        errorPhone.style.display = "block";
        phone.className = "errorColorRed";
    } else {
        phone.className = "validGreen";
        errorPhone.style.display = "none";
    }

    if (!alphaRegex.test(nameInput.value)) {
        errorName.style.display = "block";
        nameInput.className = "errorColorRed";
    } else {
        nameInput.className = "validGreen";
        errorName.style.display = "none";
    }
  
    if (!emailRegex.test(email.value) ) {
        errorEmail.style.display = "block";
        email.className = "errorColorRed";
    } else {
        email.className = "validGreen";
        errorEmail.style.display = "none";
    }

    if (!alphaRegex.test(lastName.value)) {
        errorLastName.style.display = "block";
        lastName.className = "errorColorRed";
    } else {
        lastName.className = "validGreen";
        errorLastName.style.display = "none";
    }
    
    if (!alphaRegex.test(address.value) ) {
        errorAddress.style.display = "block";
        address.className = "errorColorRed";
    } else {
        address.className = "validGreen";
        errorAddress.style.display = "none";
    }
}
