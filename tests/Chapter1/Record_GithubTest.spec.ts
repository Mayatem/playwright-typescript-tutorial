import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Navigate to GitHub', async () => {
    await page.goto('https://github.com/');
  });
 
  await test.step('Clicking the sign in', async () => {
    await page.getByRole('link', { name: 'Sign in' }).click();
  });

  await test.step('Input username', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('mny');
  });
  
  await test.step('Input password', async () => {
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('knany');
  });

  await test.step('Clicking the sign in button', async () => {
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });

  await test.step('Verify error message', async () => {
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });
 
});