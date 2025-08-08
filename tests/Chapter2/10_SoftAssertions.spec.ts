import {test, expect} from '@playwright/test';

test('Soft Assertions', async({page}) => {

await page.goto('https://www.youtube.com/');

//visible, editable, enabled, empty
const searchBox = await page.getByPlaceholder('Search', {exact : true}).first();
await expect(searchBox).toBeVisible();
await expect(searchBox).toBeEmpty();
await expect(searchBox).toBeEditable();
await expect(searchBox).toBeEnabled();

await searchBox.click();
await searchBox.fill('playwright by testers talk');
await searchBox.press('Enter');
const expectedURL = 'https://www.youtube.com/results?search_query=playwright+by+testers+talk';
await expect(page).toHaveURL(expectedURL);
await expect(page).toHaveTitle('playwright by testers talk - YouTube');


const channelName = await page.locator('//div[@id="info-section"]//div[@id="text-container"][1]');

//we purposly change the text to get fail this line
//if we put soft just after expect.soft althougt the test fail, 
// it contunue tu run the following tests
await expect.soft(channelName).toHaveText('Testers Talk');
await expect(channelName).toBeEnabled();

//check how mant element on the page
const contentCount = await page.locator('//div[@id="content"]').count();
console.log(`Number of elements: ${contentCount}`);

//checks if there are n number of element on the page
//await expect(page.locator('//div[@id="content"]')).toHaveCount(9);


});

