import {test, expect} from '@playwright/test';



//test.only(run only the resrpectif test case)
test.only('Test timeout', async ({page}) => {

// specific test execution timeout
//test.setTimeout(2 * 60 * 10000); //20 minutes


await test.step('go to tolgatem.com', async()=> {
    await page.goto('https://www.tolgatem.com/');
  
});

await test.step('keyboard actions, type in search box', async() => {
    await page.getByPlaceholder('Search Everything').click({timeout: 5000});
    await page.keyboard.type('ORCHESTRAL COMPOSITIONS');
    await page.keyboard.press('Enter');

    await expect.soft(page).toHaveTitle(' ORCHESTRAL COMPOSITIONS | Search Results  |  Tolga TEM', {timeout : 5000 });
    const title = await page.title();
console.log('Page Title:', title);
    
//await page.waitForTimeout(60000); // 1 minute


});
});