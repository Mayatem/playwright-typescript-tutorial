import {test, expect} from '@playwright/test';

test('Visual test  Page screecshot', async({page}) => {

await page.goto('https://github.com/login');
await expect(page).toHaveScreenshot('GithubLoginPage.png');

const loginBox = page.locator('#login_field');
const passwordBox = page.locator('#password');


await loginBox.fill('playwright wit typescript');
await passwordBox.fill('password');

await expect(page).toHaveScreenshot('GithubLoginPage1.png');

});


test('Visual test element screecshot', async({page}) => {

await page.goto('https://github.com/login');
await expect(page).toHaveScreenshot('GithubLoginPage.png');

const loginElement = page.locator('//div[@class ="authentication-body authentication-body--with-form new-session"]');

await expect(loginElement).toHaveScreenshot('GithubLoginForm.png');



});

