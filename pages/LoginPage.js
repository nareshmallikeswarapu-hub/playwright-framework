export class LoginPage {

  constructor(page) {
    this.page = page;

    // Locators
    this.username = '#user-name';
    this.password = '#password';
    this.loginBtn = '#login-button';
    this.errorMsg = '[data-test="error"]';
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginBtn);
  }

  async getErrorText() {
    return await this.page.locator(this.errorMsg).textContent();
  }

  async isErrorVisible() {
    return await this.page.locator(this.errorMsg).isVisible();
  }
}