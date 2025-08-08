import {test, expect} from '@playwright/test';


test.describe('Iframe, dropable', () => {

  test.beforeAll(async () => {
    console.log('This will execute before all the tests');
  });

  test.beforeEach(async () => {
    console.log('This will execute before each test case');
  });

  test.afterAll(async () => {
    console.log('This will run once after all tests');
  });

  test.afterEach(async () => {
    console.log('This will run once after each test case');
  });

});

test('keyboard action test', async ({page}) => {

await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.tolgatem.com/');
  
});

await test.step('keyboard actions, type in search box', async() => {
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('Areas of Expertise');
    //await page.keyboard.press('Enter');
    
    // await page.keyboard.press('Meta + A'); // Select all text
    //  await page.keyboard.press('Meta + C'); // Copy selected text
    //  await page.keyboard.press('Meta + V'); // Paste copied text
    //  await page.keyboard.press('Enter'); // Submit the search
    await page.keyboard.press('Delete');
  // await expect(page.getByText('Search Results Areas of Expertise')).toBeVisible();


});
 
});

test('tab enter', async ({page}) => {

await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.temsmusic.com/contact/');
  
});

await test.step('tab enter = contact page', async() => {
    const fname =  page.locator('//input[@id="wpforms-1805-field_0"]');
    await fname.fill('Maya');
    page.keyboard.press('Tab');
    page.keyboard.insertText('Tem');
    page.keyboard.press('Tab');
    page.keyboard.insertText('nazantem@gmail.com');
    page.keyboard.press('Tab');
    page.keyboard.insertText('1(615)9753666');
    page.keyboard.press('Tab');
    page.keyboard.insertText('nbubir deneme');
    await page.keyboard.press('Enter');
    
    });
 
});