import assert from 'assert';
import LoginPage from "../pages/LoginPage";
import FirstPage from "../pages/FirstPage";


suite('Login tests', function () {
    test('Login for valid credentials', async() => {
        browser.url('http://localhost:3000/');
        browser.pause(2000)
        await LoginPage.enterCredentials("ALICE","password");
        LoginPage.clickOnSubmit();
        assert.strictEqual(FirstPage.getHeaderText(),'VodQA 2019 Schedule')
    });

});
