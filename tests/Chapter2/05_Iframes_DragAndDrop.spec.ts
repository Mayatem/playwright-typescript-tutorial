import {test, expect} from '@playwright/test'

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

test('Handling Iframes, Drag and Drop elements', async ({ page }) => {
await page.goto('https://jqueryui.com/droppable/');

await test.step('Drag and drop elements', async () =>{
// Switch to the iframe
const iframe = page.frameLocator('.demo-frame');
const dragelement = iframe.locator('[id="draggable"]');
const dropgelement = iframe.locator('[id="droppable"]');
// drag and drop elements
await dragelement.dragTo(dropgelement)
});



});

});