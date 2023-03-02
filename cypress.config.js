const { defineConfig } = require("cypress");
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        launchOptions.extensions.push(path.resolve(__dirname, "dist"))

        return launchOptions;
      });
    },
    specPattern: "test/e2e/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "test/support/e2e.{js,jsx,ts,tsx}"
  }
});
