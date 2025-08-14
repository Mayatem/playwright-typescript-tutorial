
import {test, expect} from '@playwright/test'


test("API Mocking Using Playwright", async ({ page }) => {

    // Mock API request
    //https://demo.playwright.dev/api-mocking/api/v1/fruits
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            { name: 'playwright typescript by testers talk', id: 21 },
            { name: 'cypress javascript by testers talk', id: 71 },
            { name: 'api testing by testers talk', id: 72 },
            { name: 'postman by testers talk', id: 73 },
            { name: 'rest assured by testers talk', id: 74 },
        ];
        await route.fulfill({ json });
    });

//Go to URL
await page.goto('https://demo.playwright.dev/api-mocking/');

//Validate the texts
await expect(page.getByText('playwright typescript by testers talk')).toBeVisible();
await expect(page.getByText('cypress javascript by testers talk')).toBeVisible();
await expect(page.getByText('api testing by testers talk')).toBeVisible();
await expect(page.getByText('postman by testers talk')).toBeVisible();
await expect(page.getByText('rest assured by testers talk')).toBeVisible();

});

