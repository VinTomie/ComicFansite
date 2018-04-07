/* Login jQuery Functionality */
$(document).ready(() => {

    /* Declare and initialize variables for retrieving input from login form */
    const loginForm = $("form.form-signin");
    const emailInput = $("input#inputEmail");
    const passwordInput = $("input#inputPassword");

    /* Validation process when form is submitted */
    loginForm.on("submit", function(event) {
        event.preventDefault();
        console.log("Function runs\n");
        const userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim()
        };

        /* If Validation process is invalid */
        if(!userData.email || !userData.password) {
            console.log("Invalid user data entered..");
            return;
        }

        /* Clear form is user successfully logged in */
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");

    });

    /* Login user function, when called does a POST to /login route, if successfull, redirects us to user profile page */
    function loginUser(email, password) {

        $.post("/api/login", {
            email: email,
            password: password
        }).done(function(data) {
            console.log('User logged in!\n')
            window.location.replace(data);

        }).fail(function(err) {
            console.log(err);
        });

    }

});
