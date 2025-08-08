import {test, expect} from '@playwright/test';

test('keyboard action test', async ({page}) => {

await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.tolgatem.com/');
  
});

await test.step('keyboard actions, type in search box', async() => {
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('FILM MUSIC');
    await page.keyboard.press('Enter');

    await expect.soft(page).toHaveTitle('FILM MUSIC | Search Results  |  Tolga TEM');
    const title = await page.title();
console.log('Page Title:', title);
    

});
});

//test.skip(skip this test and run the other tets)
test('keyboard action test2', async ({page}) => {

await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.tolgatem.com/');
  
});

await test.step('keyboard actions, type in search box', async() => {
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('MUSIC & SOUND PRODUCTION');
    await page.keyboard.press('Enter');

    await expect.soft(page).toHaveTitle('MUSIC & SOUND PRODUCTION | Search Results  |  Tolga TEM');
    const title = await page.title();
console.log('Page Title:', title);
    

});
});


//test.only(run only the resrpectif test case)
//test.only('keyboard action test3', async ({page}) => {
test('keyboard action test3', async ({page}) => {
await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.tolgatem.com/');
  
});

await test.step('keyboard actions, type in search box', async() => {
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('ORCHESTRAL COMPOSITIONS');
    await page.keyboard.press('Enter');

    await expect.soft(page).toHaveTitle(' ORCHESTRAL COMPOSITIONS | Search Results  |  Tolga TEM');
    const title = await page.title();
console.log('Page Title:', title);
    

});
});