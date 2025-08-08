import {test, expect} from '@playwright/test';
import { asyncWrapProviders } from 'async_hooks';

test.describe('DatePicker', () => {
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

test('Selecting Date value vith date', async({page}) => {

await test.step('date picker', async ()=>{
await page.goto('https://jqueryui.com/datepicker/');

// find iframe first
const iframe = page.frameLocator('.demo-frame');
const datebox = iframe.locator('//input[@id="datepicker"]')
// await test.step('Picking date with hardcoded', async() => {
// //hardcoded date
// await datebox.fill('07/04/2025');

// });


// //selecting dynamic date
await datebox.click(); 

//picking the active days class value whic is indicate today
// await iframe.locator('.ui-datepicker-today').click(); 



// await test.step('Slececting past date', async() =>{
// //selecting past dates
// await iframe.locator('[title="Prev"]').click();
// await iframe.locator('text="15"').click();
// });

await test.step('Slececting past date', async() =>{
//selecting past dates
await iframe.locator('[title="Next"]').click();
await iframe.locator('text="15"').click();
});





});





});

