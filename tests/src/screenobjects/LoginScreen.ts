import AppScreen from './AppScreen';

class LoginScreen extends AppScreen {
  private get loginContainerButton() {
    return $('~button-login-container');
  }

  private get loginButton() {
    return $('~button-LOGIN');
  }

  private get emailInput() {
    return $('~input-email');
  }

  private get passwordInput() {
    return $('~input-password');
  }

  async tapOnLoginContainerButton() {
    await this.loginContainerButton.click();
  }

  async submitLoginForm(username: string, password: string) {
    await this.emailInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginScreen();
