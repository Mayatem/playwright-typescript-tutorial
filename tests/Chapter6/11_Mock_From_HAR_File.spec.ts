import {test, expect} from '@playwright/test'


test("Mock API from HAR File  Using Playwright", async ({ page }) => {

//1. create HAR file
//https://demo.playwright.dev/api-mocking/api/v1/fruits

//recording the har file -directory 
await page.routeFromHAR('./har/fruit.har', {
    url : '*/**/api/v1/fruits',
   // update : true //if dont want to update each time put false
    update : false
})

//2. go to url
await page.goto('https://demo.playwright.dev/api-mocking');


//3. Validate text
await expect(page.getByText('Strawberry')).toBeVisible();
await expect(page.getByText('playwright typescript by testers talk')).toBeVisible();
await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
await expect(page.getByText('playwright javascript by testers talk')).toBeVisible();
await expect(page.getByText('api testing by testers talk')).toBeVisible();

});

