import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import loginData from '../../test-data/loginData.json';

loginData.forEach((data) => {

    test(`Login Test - ${data.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate(
            'https://www.saucedemo.com'
        );

        await loginPage.login(
            data.username,
            data.password
        );

        if (data.expected === 'success') {

            await expect(page)
                .toHaveURL(/inventory/);

        } else {

            const errorMessage =
            await loginPage.getErrorText();

            expect(errorMessage)
            .toContain('Username and password');

        }

    });

});