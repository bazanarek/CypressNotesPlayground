const { defineConfig } = require("cypress");
require("dotenv").config(); 

module.exports = defineConfig({
  fixturesFolder: 'tests/e2e/fixtures',
  e2e: {
    setupNodeEvents(on, config) {

    },
    supportFile: false,
    specPattern: 'tests/e2e/specs/**/*.cy.js',
    supportFile: 'tests/e2e/support/index.js',
    baseUrl: 'https://practice.expandtesting.com',
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,
    }
  },
});
