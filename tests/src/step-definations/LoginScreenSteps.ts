import { Given, When, Then } from '@wdio/cucumber-framework';

import DemoLoginPage from '../pageobjects/LoginPage.js';
import { setValue, getValue } from '@wdio/shared-store-service';
import LoginPage from '../pageobjects/LoginPage.js';

Given(/^I am on the (\w+) page$/, async (page) => {
  await DemoLoginPage.open();
});

When(/^I login to the application with (\w+)$/, async (userType: string) => {
  console.log('userdata: ' + (await UserDataService.getUserByType(userType)).userName);
  const loggedInUser: Users = await UserDataService.getUserByType(userType);
  await setValue(ContextKeys.LOGGED_IN_USER, loggedInUser);
  await DemoLoginPage.login(loggedInUser.userName, loggedInUser.userPassword);
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
  await expect(LoginPage.warningText).toBeExisting();
  await expect(LoginPage.warningText).toHaveTextContaining(message);
});