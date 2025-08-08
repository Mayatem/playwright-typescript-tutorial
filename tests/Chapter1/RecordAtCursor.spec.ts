import {test, expect} from '@playwright/test';

//write test
test('Record at cursor test', async ({page}) => {

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

//record of cursor
await test.step('Record at cursor validation', async() => {
    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
    
    await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#1 Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial');
});

//validate second video in the playlist
await test.step('Validate second video in the playlist', async () => {  
    await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
    await expect(page.locator('ytd-playlist-video-list-renderer')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');

});





});