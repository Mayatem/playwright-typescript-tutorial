//Import playwright module
import {test, expect} from '@playwright/test'

//write test
test('google page test', async ({page}) => {

//go to url
await test.step('Navigate to Google', async () => {
await page.goto('https://google.com');
});

//search with keywords
await test.step('Search for Playwright by Testers Talk', async () => {
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
});

await test.step('clisking the search button', async ()=>{
    //await page.keyboard.press('Enter')
    await page.getByRole('button', { name: 'Google Search' }).press('Enter');
});


//Click on playlist
await test.step('click on playlist link', async()=>{
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️'}).first().click();
});

//validate web page title
await test.step('Verify te title', async () => {
    await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');
});


});
