import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import qa from '../config/qa.json';

export const test = base.extend({

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate(qa.baseURL);
    await loginPage.login(qa.username, qa.password);

    await use(page);
  }

});

export const expect = test.expect;