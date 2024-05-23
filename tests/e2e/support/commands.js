import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import notesMocks from "../mocks/notesMocks";

const loginSuccess = 'loginSuccess.json'

Cypress.Commands.add('findElementByTestData', value => {
    Cypress.log({
      displayName: 'findElementByTestData',
      message: value,
      consoleProps() {
        return {
          selector: value
        }
      }
    })
    return cy.get(`[data-testid=${value}]`, {log: true});
  });

Cypress.Commands.add('loginUser', () => {
  cy.session('keep user logged in', () => {
    cy.visit('notes/app/login');
      loginPage
        .typeLogin(Cypress.env('username'))
        .typePassword(Cypress.env('password'))
        .submitLogin()

        homePage.logoutButton().should('be.visible');

        cy.window().then((win) => {
          const token = 'mock-auth-token';
          win.localStorage.setItem('authToken', token);
        });
  }, {
    cacheAcrossSpecs: true,
    validate: () => {
      cy.window().its('localStorage.authToken').should('eq', 'mock-auth-token');
    }
  })
})