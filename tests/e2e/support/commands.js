Cypress.Commands.add('findElementByTestData', value => {
    return cy.get(`[data-testid=${value}]`);
  });
