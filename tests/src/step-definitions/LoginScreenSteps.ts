import { Given, When, Then } from '@wdio/cucumber-framework';

import { setValue, getValue } from '@wdio/shared-store-service';
import LoginPage from '../pageobjects/LoginPage';

Given("I am on the login page", async () => {
  await LoginPage.open();
});

When('I login with {string} and {string}', async (email: string, password: string) => {
  await LoginPage.login(email, password);
});

Then("I should see a flash message saying {string}", async (message: string) => {
  await expect(LoginPage.warningText).toBeExisting();
  await expect(LoginPage.warningText).toHaveTextContaining(message);
});