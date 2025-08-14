import {test, expect} from '@playwright/test'


test("Mock API Response Using Playwright", async ({ page }) => {

    // Mock API response
    //https://demo.playwright.dev/api-mocking/api/v1/fruits
    await page.route('*/**/api/v1/fruits', async route => {

    //using route.fetch() function to get the response from the web page
    const response = await route.fetch();

    //Converting response into JSON object
    const json = await response.json();

    //adding required response in the JSON objects with push method
    json.push({ name: 'playwright typescript by testers talk', id: 21 });
    json.push({ name: 'cypress javascript by testers talk', id: 71 });
    json.push({ name: 'api testing by testers talk', id: 72 });
    json.push({ name: 'postman by testers talk', id: 73 });
    json.push({ name: 'rest assured by testers talk', id: 74 });
    
    //Sending the response passing response and json
    await route.fulfill({response, json });
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

