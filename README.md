# Automating your QA with Visual Regression Testing Example Repository

This repository was originally an example from the workshop Automating your QA with Visual Regression Testing, presented by @ataylorme at WordCamp US 2019 in St Louis. The slides that accompany this repository can be found [here](https://bit.ly/ataylorme-visual-regression-workshop).

----

## Important Note About This Repo Copy

Updated: Feb 20, 2020

The original repository was removed from GitHub by the author, but having found it to be an excellent starting point after attending the presentation in November, 2019, I pushed my local here since I had foolishly not forked it at the time of the presentation. I do not plan to do additional maintenance on this repository. If you have questions you should watch the video of the presentation, [Andrew Taylor: Automating Your QA with Visual Regression Testing on WordPress.tv](https://wordpress.tv/2019/11/19/andrew-taylor-automating-your-qa-with-visual-regression-testing-part-1/) - [part 1](https://wordpress.tv/2019/11/19/andrew-taylor-automating-your-qa-with-visual-regression-testing-part-1/) and [part 2](https://wordpress.tv/2019/11/19/andrew-taylor-automating-your-qa-with-visual-regression-testing-part-2/)

[![Andrew Taylor: Automating Your QA with Visual Regression Testing on WordPress.tv](https://videos.files.wordpress.com/njIOur4Y/video-c8360bfd3f_scruberthumbnail_0.jpg)](https://wordpress.tv/2019/11/19/andrew-taylor-automating-your-qa-with-visual-regression-testing-part-1/)

----

## Tools & Technologies

[BackstopJS](https://github.com/garris/BackstopJS/) is used for the visual regression testing. The app itself is built with [Node JS](https://nodejs.org/), [`commander.js`](https://github.com/tj/commander.js/), and [`Inquirer.js`](https://github.com/SBoudrias/Inquirer.js).

## Prerequisites

You will need:

* A local development environment with [Node JS/NPM](https://docs.npmjs.com/getting-started/installing-node)
* A live, web-accessible WordPress site
* Another environment of the WordPress site above (e.g. local, staging, etc.)

### Getting The Code

Create a new repository from this template and then either use Git to clone the repository or download the `.zip` file.

## Instructions

After setting up the repository locally (see above) you will need to:

1. Run the command [`npm ci`](https://docs.npmjs.com/cli/ci.html) to download dependencies
    * This only needs to be done once
2. Run the command `npm run start`
    * Select the site you want to test from the list
    * Note: `npm run start` can be used anytime you want to run the app
3. Check out the results from the sample test
    * They should open in your browser automatically
4. Edit `inc/sitesToTest.js`
    * This is where the list of sites to test is stored
    * Try changing to one (or more) of your sites
    * `nonProductionBaseUrl` is your non-production environment (local, staging, etc.) URL
    * `productionBaseUrl` is your production site URL
    * Adjust `pathsToTest`, which is the array of URIs to test for each site
5. Edit `inc/backstopConfig.js` to adjust viewports, delay, hidden selectors, etc.
6. Run the command `npm run start`.
    * Select the site you want to test from the list

## Troubleshooting

If you are having issues with the script hanging or BackstopJS taking a long time there may be headless Chrome instances that didn't close properly.

Try `pkill -f "(chrome)?(--headless)"` on Mac/Linux or `Get-CimInstance Win32_Process -Filter "Name = 'chrome.exe' AND CommandLine LIKE '%--headless%'" | %{Stop-Process $_.ProcessId}` in Windows PowerShell.
