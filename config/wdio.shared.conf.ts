import type { Options } from '@wdio/types';
import { setValue, getValue } from '@wdio/shared-store-service';
import {rimraf} from 'rimraf';
import * as path from 'path';

import report = require('multiple-cucumber-html-reporter');
import cucumberJson from 'wdio-cucumberjs-json-reporter';


let bUrl: string;
let lastSession: string = '';
const urls = {
    dev: 'https://the-internet.herokuapp.com/',
    test: 'https://the-internet.herokuapp.com/'
};
bUrl = urls['dev'];

export const config: WebdriverIO.Config = {
    // export const config: Options.Testrunner  = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: "local",

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    //
    // ==================
    // Specify Test Files
    // ==================
    // The test-files are specified in:
    // - wdio.chrome.app.conf.ts
    // - wdio.firefox.app.conf.ts
    // - wdio.edge.app.conf.ts
    //
    /**
     * NOTE: This is just a place holder and will be overwritten by each specific configuration
     */
    specs: [
        '../tests/features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // The capabilities are specified in:
    // - wdio.chrome.app.conf.ts
    // - wdio.firefox.app.conf.ts
    // - wdio.edge.app.conf.ts
    capabilities: [
    ],
    //
    /**
     * NOTE: This is just a place holder and will be overwritten by each specific configuration
     */
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    // capabilities: [
    //     {
    //         // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //         // grid with only 5 firefox instances available you can make sure that not more than
    //         // 5 instances get started at a time.
    //         maxInstances: 1,
    //         //
    //         browserName: 'chrome',
    //         acceptInsecureCerts: true
    //         // If outputDir is provided WebdriverIO can capture driver session logs
    //         // it is possible to configure which logTypes to include/exclude.
    //         // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    //         // excludeDriverLogs: ['bugreport', 'server'],
    //     }
    // ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "debug",
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/devtools-service
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: bUrl,
    // Default timeout for all waitFor* commands.
    waitforTimeout: 45000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    //
    // Services are empty here but will be defined in the
    // configuration files
    services: ['chromedriver', 'shared-store'],
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: "cucumber",
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [[
        'cucumberjs-json',
        {
            jsonFolder: './reports/cucumberjs-json',
            language: 'en',
            reportFilePerRetry: 'true'
        }
    ]],

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./tests/src/step-definitions/*Steps.ts'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 60000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false,

        //formatters options 
        formatOptions: {
            message: true,
            'usage-json': true,
            summary: true
        },
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    /**
       * Gets executed once before all workers get launched.
       * @param {object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       */
    onPrepare: function (config: Object, capabilities: Array.<Object>): void {
        rimraf.sync('./reports/cucumberjs-json');
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Cucumber Hooks
     *
     * Runs before a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // beforeFeature: function (uri, feature) {
    // },
    /**
     *
     * Runs before a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
     * @param {object}                 context  Cucumber World object
     */
    beforeScenario: async function (world, context) {
        // the below if statement is cleaning the browser session only when it's the same as previous scenario's session
        // this is needed so we are spawning a new session for each scenario
        // and not reloading session when it's not needed(when session is new already during the first test run)
        if (browser.sessionId == lastSession) {
            await browser.reloadSession();
        }
    },
    /**
     *
     * Runs before a Cucumber Step.
     * @param {Pickle.IPickleStep} step     step data
     * @param {IPickle}            scenario scenario pickle
     * @param {object}             context  Cucumber World object
     */
    // beforeStep: function (step, scenario, context) {
    // },
    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {object}             context          Cucumber World object
     */
    afterStep: async function (step, scenario, result, context) {
        if (!result.passed) {
            console.log("Taking screenshot.");
            await cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        }
    },
    /**
     *
     * Runs after a Cucumber Scenario.
     * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
     * @param {object}                 result           results object containing scenario results
     * @param {boolean}                result.passed    true if scenario has passed
     * @param {string}                 result.error     error stack if scenario failed
     * @param {number}                 result.duration  duration of scenario in milliseconds
     * @param {object}                 context          Cucumber World object
     */
    // afterScenario: async function (world, result, context) {
    // console.log('scenario status: ' + world.result.status);
    // await browser.reloadSession();
    // },
    /**
     *
     * Runs after a Cucumber Feature.
     * @param {string}                   uri      path to feature file
     * @param {GherkinDocument.IFeature} feature  Cucumber feature object
     */
    // afterFeature: function (uri, feature) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {number} result 0 - command success, 1 - command error
     * @param {object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {object} exitCode 0 - success, 1 - fail
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    onComplete: function (exitCode, config, capabilities, results) {
        let date = new Date();

        report.generate({
            jsonDir: './reports/cucumberjs-json',
            reportPath: './reports/cucumberjs-json',
            displayDuration: true,
            displayReportTime: true,
            openReportInBrowser: true,
            disableLog: false,
            saveCollectedJSON: true,
            reportName: 'Web Tests Report',
            customData: {
                title: 'Web Tests Report',
                data: [
                    { label: 'Project', value: 'WDIO Demo Project' },
                    { label: 'Environment', value: 'dev' },
                    { label: 'BaseURL', value: bUrl },
                    { label: 'Platform', value: process.platform },
                    { label: 'Date', value: date.toLocaleDateString() }
                ]
            }
        });
    },
    /**
    * Gets executed when a refresh happens.
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
};
