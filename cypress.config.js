const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "https://commitquality.com/",
  resolution: "1920x1080",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 1000,
  responseTimeout: 1000,
  taskTimeout: 1000,
  scrollBehavior: "center",
  chromeWebSecurity: false,
  fixtures: true,
  videoUploadOnPasses: false,
  experimentalWebKitSupport: true,
  experimentalInteractiveRunEvents: true,
  numTestsKeptInMemory: 3,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  specPattern: "**/*.cy.ts",
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
