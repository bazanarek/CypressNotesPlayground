import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";


describe('Login to app', () => {
    beforeEach(() => {
        cy.visit('notes/app/login');
      });
    
    it('Succesfull login', () => {
        loginPage
            .typeLogin(Cypress.env('username'))
            .typePassword(Cypress.env('password'))
            .submitLogin();

        homePage.logoutButton().should('be.visible');
        homePage.profileButton().should('be.visible');
    });

    it('Logout', () => {
        loginPage
            .typeLogin(Cypress.env('username'))
            .typePassword(Cypress.env('password'))
            .submitLogin();
        homePage.logout();

        loginPage.loginScreenText().should('include.text', 'Welcome to Notes App');
    });
});

