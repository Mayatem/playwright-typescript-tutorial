import { test, expect } from '@playwright/test';
test.beforeAll(async () => {
    console.log('This will run once before all tests');
});

test.beforeEach(async () => {
    console.log('This will run once before each test cases');
});
test.afterAll(async () => {
    console.log('This will run once after all tests');
});

test.afterEach(async () => {
    console.log('This will run once after each test cases');
});


test('test 1', async ({page}) => {

   console.log('Test1 execution started...');
await page.goto('https://www.youtube.com/@testerstalk');

  //capture screenshot of element
await page.locator('#page-header-container').screenshot({path: './screenshots/ElementScreenshot.png'});
  
});

test('test 2', async ({page}) => {
   console.log('Test2 execution started...');
//go to url
await test.step('Navigate to Google', async () => {
await page.goto('https://www.youtube.com/@testerstalk');
});

//search with keywords
await test.step('page screenshot', async () => {
   await page.screenshot({path: './screenshots/VisiblePageScreenshot.png'});
});


});