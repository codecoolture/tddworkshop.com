/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jest = require("next/jest");

module.exports = jest()({
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/cypress/"],
});
