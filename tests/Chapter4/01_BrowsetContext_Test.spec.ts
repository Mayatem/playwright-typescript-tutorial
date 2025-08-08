import {test, expect} from '@playwright/test';


test('keyboard action test1', {tag: ['@SmokeTesting']}, async ({page, browser}) => {

    await page.goto('https://www.tolgatem.com/');
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('FILM MUSIC');
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle('FILM MUSIC | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
    
    //new browser session
const context2 = await browser.newContext(); //creates new browser
const page2 = await context2.newPage(); //creates new tab
    await page2.goto('https://www.tolgatem.com/');
    await page2.getByPlaceholder('Search Everything').click();
    await page2.keyboard.type('ORCHESTRAL COMPOSITIONS');
    await page2.keyboard.press('Enter');
    await expect.soft(page2).toHaveTitle('ORCHESTRAL COMPOSITIONS | Search Results  |  Tolga TEM');
    const title2 = await page2.title();
    console.log('Page Title:', title);

//CREATE NEW TABs
const newTab = await context2.newPage();
  await newTab.goto('https://www.tolgatem.com/');
    await newTab.getByPlaceholder('Search Everything').click();
    await newTab.keyboard.type('MUSIC & SOUND PRODUCTION');
    await newTab.keyboard.press('Enter');
    await expect.soft(newTab).toHaveTitle('MUSIC & SOUND PRODUCTION | Search Results  |  Tolga TEM');
    const title3 = await newTab.title();
    console.log('Page Title:', title);

});