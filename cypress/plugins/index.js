// cypress/plugins/index.js

// Include the Cypress Testing Library plugin
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const { startDevServer } = require('@cypress/webpack-dev-server');

// Include the Cypress Axe plugin
const { configureAxe } = require('cypress-axe');

module.exports = (on, config) => {
  // Add Cypress Testing Library commands
  addMatchImageSnapshotPlugin(on);
  startDevServer({ options: {}, webpackConfig: {} });

  // Configure Cypress Axe
  on('task', configureAxe());

  // Return the modified configuration
  return config;
};
