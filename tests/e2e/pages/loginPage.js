export class LoginPage {

    #url = '/notes/app/'

    loginButton = () => cy.get('.btn-primary');
    loginField = () => cy.findElementByTestData('login-email');
    passwordField = () => cy.findElementByTestData('login-password');
    submitLoginButton = () => cy.findElementByTestData('login-submit');

    visitUrl = () => {
        cy.visit(this.#url);
        return this;
    }

    clickLogin() {
        this.loginButton().click();
        return this;
    }

    typeLogin(loginText) {
        this.loginField().click();
        this.loginField().type(loginText);
        return this;
    }

    typePassword(passwordText) {
        this.passwordField().click();
        this.passwordField().type(passwordText);
        return this;
    }

    submitLogin() {
        this.submitLoginButton().click();
        return;
    }
}

export default new LoginPage();