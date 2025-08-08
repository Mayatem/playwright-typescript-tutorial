import {test, expect} from '@playwright/test'


test('getText(), getAttribute() values in Playwright', async({page}) => {

  await page.goto('https://www.tolgatem.com/');

const name = await page.locator('#site-features > div > ul > li:nth-child(2) > p').textContent();
const finalName = name?.trim(); //it trims the space before and after
console.log(`The name is: ${finalName}`);
expect(name)

})

test('innerText(), getAttribute() values in Playwright', async({page}) => {

  await page.goto('https://github.com/BakkappaN');

const name1 = await page.locator('[itemprop="name"]').innerText();
const finalName1 = name1?.trim(); //it trims the space before and after
console.log(`The name is: ${finalName1}`);
expect(finalName1).toBe('Testers Talk')

})

test('getAttribute() values in Playwright', async({page}) => {

  await page.goto('https://github.com/BakkappaN');

const attributeValue = await page.getByTestId('projects').first().getAttribute('data-selected-links');
console.log(`Attribute value is: ${attributeValue}`);
expect(attributeValue).toBe('projects /BakkappaN?tab=projects');

})