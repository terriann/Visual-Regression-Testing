// Rename this file to `sitesToTest.js` which is ignored in this skeleton repo.

module.exports = {
  "Sample Site": {
    label: "sample site",
    productionBaseUrl: "https://example.com/",
    nonProductionBaseUrl: "https://staging.example.com/",

    pathsToTest: ["/", "/about"],
    // Global selectors to hide on all pages.
    hideSelectors: [".cookie-banner"],
  },
};
