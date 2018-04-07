$(document).ready(() => {

    const signUpForm = $("form.signup");
    const emailInput = $("input#email");
    const passwordInput = $("input#pass");

    /* Validate that the email and password fields are not blank */
    signUpForm.on("submit", (event) => {
        event.preventDefault();
        console.log("This executes\n");
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        /* If user did not enter valid data, return */
        if(!userData.email || !userData.password) {
            return;
        }

        signUpUser(userData.email, userData.password);

        /* Clear form when successful login occurs */
        emailInput.val("");
        passwordInput.val("");

    });

    function signUpUser(email, password) {

        $.post("/api/signup", {
            email: email,
            password: password
        }).done(function(data) {
            window.location.replace(data);

        }).fail(function(err) {
            console.log(err);

        });

    }

});
