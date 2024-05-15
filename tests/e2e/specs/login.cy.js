import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";


describe('Login to app', () => {
    beforeEach(() => {
        loginPage.visitUrl()
    });

    it('Succesfull login', () => {
        loginPage
            .clickLogin()  
            .typeLogin(Cypress.env('username'))
            .typePassword(Cypress.env('password'))
            .submitLogin()

        homePage.logoutButton().should('be.visible');
        homePage.profileButton().should('be.visible');
    })
});

