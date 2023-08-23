import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginScreen from '../screenobjects/LoginScreen'; 

Given(/^I am on the login screen$/, async () => {
  // Add code here to navigate to the login screen if needed
});

When(/^I tap on the Login container button$/, async () => {
  await LoginScreen.tapOnLoginContainerButton();
});

When(/^I enter the username "([^"]*)" and password "([^"]*)"$/, async (username: string, password: string) => {
  await LoginScreen.submitLoginForm(username, password);
});

Then(/^I should be logged in$/, async () => {
  // Add assertion or verification code here to confirm successful login
});
