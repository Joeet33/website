// Name and Password from the register-form
var username1 = document.getElementById("username1");
var password1 = document.getElementById("password1");
var email1 = document.getElementById("email1");

// storing input from register-form
function store() {
    localStorage.setItem("username1", username1.value);
    localStorage.setItem("password1", password1.value);
    localStorage.setItem("email1", email1.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem("username1");
    var storedPw = localStorage.getItem("password1");
    var storedEmail = localStorage.getItem("email1");

    // entered data from the login-form
    var username2 = document.getElementById("username2");
    var password2 = document.getElementById("password2");
    var email2 = document.getElementById("email2");

    // check if stored data from register-form is equal to data from login form
    if(username2.value == storedName && password2.value == storedPw && email2.value == storedEmail) {
        alert("You are logged in.");
    }else {
        alert("ERROR.");
    }
}