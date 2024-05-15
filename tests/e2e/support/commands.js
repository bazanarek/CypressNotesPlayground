Cypress.Commands.add('findElementByTestData', value => {
    return cy.get(`[data-testid=${value}]`);
  });

//Cypress.Commands.add('login', (user, password))