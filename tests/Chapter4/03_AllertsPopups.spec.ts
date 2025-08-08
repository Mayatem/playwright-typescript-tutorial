import {test, expect} from '@playwright/test'

test('Handeling Alerts ', async({page})=> {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')

page.once('dialog', dialog => {
    dialog.accept();  //to accept the alert
  //  dialog.dismiss(); //cancel the alert
  console.log(`Alert message is: ${dialog.message()}`)
   console.log(`Dialog type is: ${dialog.type()}`);
})
await page.getByText('See an example alert', {exact : true}).click();
});

test('Handeling Popups', async({page})=> {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')
page.once('dialog', dialog => {
   // dialog.accept();  //to accept the alert
    dialog.dismiss(); 
    console.log(`Confirm message is: ${dialog.message()}`)
    console.log(`Dialog type is: ${dialog.type()}`);
})
await page.getByText('See a sample confirm', {exact : true}).click();
});


test('Handeling prompt Popups', async({page})=> {
await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/')
page.once('dialog', async(dialog) => {
   await dialog.accept('playwright');
   await console.log(`Popup message is: ${dialog.message()}`);
   await console.log(`Dialog type is: ${dialog.type()}`);
})
await page.getByText('See a sample prompt', {exact : true}).click();
});

