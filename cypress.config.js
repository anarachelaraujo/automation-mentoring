const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "https://qa-7.d.bark.com",
  resolution: "1920x1080",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  taskTimeout: 30000,
  scrollBehavior: "center",
  chromeWebSecurity: false,
  fixtures: true,
  videoUploadOnPasses: true,
  experimentalWebKitSupport: true,
  experimentalInteractiveRunEvents: true,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
