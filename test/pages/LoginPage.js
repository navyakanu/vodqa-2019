let LoginPage = {

    enterCredentials(usernameValue,passwordValue) {
        const username = $('#username');
        username.setValue(usernameValue);
        const password = $('#password');;
        password.setValue(passwordValue);
        return;
    },
    clickOnSubmit(){
        const loginButtin = $('#submit');
        loginButtin.click();
    }
}

export default LoginPage;
