import {test, expect} from '@playwright/test';

//Retests the only failed tests
test('Passed Test', {tag: ['@SmokeTesting']}, async ({page}) => {

    await page.goto('https://www.tolgatem.com/');
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('FILM MUSIC');
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle('FILM MUSIC | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
   });
   
   
test('Failed test1', {tag: ['@SmokeTesting']}, async ({page}) => {


    await page.goto('https://www.tolgatem.com/');
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('ORCHESTRAL COMPOSITIONS');
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle('ORCHESTRAL COMPOSITIONS | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
    //to make failed this test
   // expect(true).toBe(false);

});

test('Failed test2', {tag: ['@SmokeTesting']}, async ({page}) => {

    await page.goto('https://www.tolgatem.com/');
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('MUSIC & SOUND PRODUCTION');
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle('MUSIC & SOUND PRODUCTION | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
     //to make failed this test
    //expect(true).toBe(false);

});