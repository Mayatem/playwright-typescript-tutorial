import {test, expect} from '@playwright/test';

const searchKeywords = ['FILM MUSIC', 'MUSIC & SOUND PRODUCTION', 'ORCHESTRAL COMPOSITIONS']

for(const searchKeyword of searchKeywords){
    

test(`kparameterize Test in playwright ${searchKeyword}`, {tag: ['@SmokeTesting']}, async ({page}) => {



await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.tolgatem.com/');
  
});

await test.step('keyboard actions, type in search box', async() => {
    await page.getByPlaceholder('Search Everything').click();
    await page.keyboard.type(searchKeyword);
    await page.keyboard.press('Enter');

    await expect.soft(page).toHaveTitle(searchKeyword + ' | Search Results  |  Tolga TEM');
    const title = await page.title();
console.log('Page Title:', title);
    

});
});

}

