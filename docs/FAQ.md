# Frequently Asked Questions

This document provides answers to frequently asked questions about WebDriverIO and mobile app testing.

## Q1: Can I run tests in parallel?

Yes, WebDriverIO supports running tests in parallel. You can configure the maximum number of instances to run simultaneously in your `wdio.conf.js` file.

## Q2: How do I take screenshots during test execution?

You can take screenshots using the WebDriverIO `browser.saveScreenshot` method. Specify the file path to save the screenshot.

## Q3: Is there support for data-driven testing?

Yes, WebDriverIO supports data-driven testing. You can use various techniques, such as reading test data from external files or using test data providers, to parameterize your tests.

## Q4: How do I wait for elements to appear on the screen?

You can use WebDriverIO's built-in `browser.waitUntil` method to wait for elements to appear or meet certain conditions. Specify the element selector and the desired conditions to wait for.

