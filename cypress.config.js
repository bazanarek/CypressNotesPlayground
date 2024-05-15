const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    specPattern: 'tests/e2e/specs/**/*.cy.js',
    supportFile: 'tests/e2e/support/index.js',
    baseUrl: 'https://practice.expandtesting.com/',
    "env": {
      "username": "testingfellow@gmail.com",
      "password": "Pass99!"
    }
  },
});
