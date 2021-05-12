const untrailingSlashIt = require('./utils').untrailingSlashIt;
const leadingSlashIt = require('./utils').leadingSlashIt;
const rootPath = require('./utils').rootPath;

module.exports = function backstopConfig({ nonProductionBaseUrl, productionBaseUrl, pathsToTest, siteName, hideSelectors }) {

    const backstopDataDir = `backstop_data/${siteName}`;
    const delayTime = 1500;
    const acceptableThreshold = 0.15;

    const config = {
      id: siteName,
      asyncCaptureLimit: 10,
      viewports: [
        {
          name: "phone",
          width: 320,
          height: 480,
        },
        {
          name: "desktop",
          width: 1920,
          height: 1080,
        },
      ],
      scenarios: [
        
      ],
      //onReadyScript: "onReadyScript.js",
      paths: {
        ci_report: `${backstopDataDir}/ci_report`,
        json_report: `${backstopDataDir}/json_report`,
        html_report: `${backstopDataDir}/html_report`,
        bitmaps_reference: `${backstopDataDir}/bitmaps_reference`,
        bitmaps_test: `${backstopDataDir}/bitmaps_test`,
        compare_data: `${backstopDataDir}/bitmaps_test/compare.json`,
        casper_scripts: `${backstopDataDir}/casper_scripts`,
        engine_scripts: `${rootPath}/inc/${siteName}`,
      },
      engine: "puppeteer",
      report: ["browser", "json"],
      casperFlags: [],
      debug: false,
      port: 3001,
    };


    const scenarios = pathsToTest.map(function (path) {
        
        return {
          label: path,
          url: untrailingSlashIt(nonProductionBaseUrl) + leadingSlashIt(path),
          referenceUrl:
            untrailingSlashIt(productionBaseUrl) + leadingSlashIt(path),
          hideSelectors: hideSelectors,
          selectors: ["document"],
          readyEvent: null,
          delay: delayTime,
          misMatchThreshold: acceptableThreshold,
        };

    });

    config.scenarios = config.scenarios.concat(scenarios);

    return config;

};