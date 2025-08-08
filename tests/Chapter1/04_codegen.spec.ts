/*
We can create codegen by using browser record 
playwright codegen -> npx playwright codegen
then 2 browser will be opened
    -1. browser which we go the test steps throug
    -2. second browser create codes for each steps we did with the broser
        we can copy the test codes and also can convert them any programming language
*/


import { test, expect } from '@playwright/test';

test('Codegen test case', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
  await expect(page.getByRole('link', { name: '▶ #1 Playwright Tutorial Full' })).toBeVisible();
});