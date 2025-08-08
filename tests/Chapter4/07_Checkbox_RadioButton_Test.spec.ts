import {test, expect} from '@playwright/test'


test('Checkboxes and RadioButtons', async({page}) => {
await page.goto('https://jqueryui.com/checkboxradio/');

const iframe = page.frameLocator('.demo-frame');

await expect(iframe.locator('[for="radio-1"]')).not.toBeChecked(); //validate if the button is not checked
await iframe.locator('[for="radio-1"]').check();
await expect(iframe.locator('[for="radio-1"]')).toBeChecked();//verif if the button is checked now



})