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

test('Mouse actions test', async({page}) => {

    await test.step('mouse action', async() => {
    await page.goto('https://www.tolgatem.com/');
     });

     await test.step('click on search box', async() => {
        //Type playwrigt for testters talk and click
       await page.getByRole('link', { name: 'Gate 724 – Music and Sound Production for Games' }).first().click({button: 'left'});
    //    await page.getByRole('link', { name: 'Gate 724 – Music and Sound Production for Games' }).first().click({button: 'middle'});
    //    await page.getByRole('link', { name: 'Gate 724 – Music and Sound Production for Games' }).first().click({button: 'right'});
   });

});

test('Mouse actions test with hover', async({page}) => {
await page.goto('https://www.youtube.com/');
const hoveredElement = page.locator('#voice-search-button');
hoveredElement.hover();
hoveredElement.click();
//hoveredElement.dblclick(); // Double click on the hovered element
await expect(page.locator('//*[@id="prompt"]')).toHaveText('Waiting for permission ');
});