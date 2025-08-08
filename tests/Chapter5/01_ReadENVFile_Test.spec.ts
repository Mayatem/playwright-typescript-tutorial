


import {test, expect} from '@playwright/test';

//Retests the only failed tests
test('Read ENV file config in Playwright', async ({page}) => {

    await page.goto(`${process.env.TOLGATEM_URL}`);
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type('FILM MUSIC');
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle('FILM MUSIC | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
   });
   