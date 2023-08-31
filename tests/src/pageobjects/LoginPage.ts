import { $ } from '@wdio/globals';
import Page from './Page';

const SELECTORS = {
  LOGIN_PAGE: '#username',
  LOGIN_BUTTON: 'button[type="submit"]',
  USERNAME_INPUT: '#username',
  PASSWORD_INPUT: '#password',
  WARNING_TEXT: '#flash',
};

class LoginPage extends Page {
  constructor() {
    super(SELECTORS.LOGIN_PAGE);
  }
  get usernameInput() {
    return $(SELECTORS.USERNAME_INPUT);
  }

  get passwordInput() {
    return $(SELECTORS.PASSWORD_INPUT);
  }

  get loginButton() {
    return $(SELECTORS.LOGIN_BUTTON);
  }

  get warningText() {
    return $(SELECTORS.WARNING_TEXT);
  }
  async enterUsername(email: string) {
    await this.usernameInput.setValue(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.setValue(password);
  }

  async clickSubmitButton() {
    await this.loginButton.click();
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmitButton();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('login');
  }
}

export default new LoginPage();
