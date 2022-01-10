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

    var alphaNumRegex = /[a-zA-Z0-9]{3,}/g
    var phoneRegex = /[0-9]{3,}/g
    var nameInputRegex = /[a-zA-Z]{3,}/g
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if (!alphaNumRegex.test(password.value)) {
        errorPassword.style.display = "block";
        password.className = "errorColorRed";
    }

    if (!phoneRegex.test(phone.value)) {
        errorPhone.style.display = "block";
        phone.className = "errorColorRed";
    }

    if (!nameInputRegex.test(nameInput.value)) {
        errorName.style.display = "block";
        nameInput.className = "errorColorRed";
    }
  
    if (!emailRegex.test(email.value) ) {
        errorEmail.style.display = "block";
        email.className = "errorColorRed";
    }

    if (!nameInputRegex.test(lastName.value)) {
        errorLastName.style.display = "block";
        lastName.className = "errorColorRed";
    }
    
    if (!alphaNumRegex.test(address.value) ) {
        errorAddress.style.display = "block";
        address.className = "errorColorRed";
    }
}
