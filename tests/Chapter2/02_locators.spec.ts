import {test, expect} from '@playwright/test'

test('locators in Playwright', async ({page}) => {

await test.step('Go to GitHub', async () => {
await page.goto('https://github.com/BakkappaN');
});


await test.step('click on Sign in - by get by role ', async () => {
await page.getByRole('link', { name: 'Sign in' }).click();
});


// await test.step('Enter name using get by label', async () => {
// await page.getByLabel('Homepage', {exact : true}).first().click();
// });



// await test.step('Clicking using by ByAltText - image text', async () => {
// await page.getByAltText("View BakkappaN's full-sized avatar").click();
// });



// await test.step('Clicking using getByTestId ', async () => {
//     //whenever use attribute name
//     //1. put attribute name in playwright config.tsq
//     //2. use getByTestId
//     //we are not specifying the attribute name here
//     //because we have already specified in playwright.config.ts
//     //testIdAttribute: 'data-tab-item',
//     //so we can use getByTestId directly
// await page.getByTestId('repositories').first().click();
// await page.getByTestId('projects').first().click();
// await page.getByTestId('packages').first().click();

// });

await test.step('GetbyTex', async () => {
await page.getByText('Sign up').first().click();
});

});

test('locators in Playwright - using getByPlaceholder, Xpath', async ({page}) => {    

await test.step('Go to Youtube', async () => {
await page.goto('https://www.youtube.com/@testerstalk');
});
//getByplaceholder is used to find the input field with placeholder text

// await test.step('getByPlaceholder test', async () => {
// await page.getByPlaceholder('Search').fill('Playwright Tutorial');
// await page.getByPlaceholder('Search').press('Enter');
// });

// await test.step('testing using simple xPath test', async () => { 
// await page.locator('//input[@name="search_query"]').fill('Playwright Tutorial');
// await page.locator('//input[@name="search_query"]').press('Enter');
// });


//Using simply css selector
// await test.step('testing using simple css selector', async () => {
// await page.locator('input[name="search_query"]').first().fill('Playwright Tutorial');
// await page.locator('input[name="search_query"]').press('Enter');
// });

//getByTitle is used to find the element with title attribute
await test.step('getByTitle test', async () => {
await page.locator('input[name="search_query"]').first().fill('Playwright Tutorial');
await page.getByTitle('Search').press('Enter');
});

});

test('locators getByTitle - google.com', async ({page}) => {

    test.step('Go to Google', async ()=> {
    await page.goto('https://www.google.com');
    });

    test.step('getByTitle test', async() => {
        await page.getByTitle('Search').fill('Playwright Tutorial');
        await page.getByTitle('Search').press('Enter');
    });

    
});

