// Import playwright module
import { test, expect } from '@playwright/test';

import path from 'path';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const filePath = path.join(__dirname, '../../test-data/qa/TestData.xlsx');
const records = readExcelFile(filePath);


for (const record of records) {
    test(`Data Driven Testing using CSV file in playwright: ${record.Skill1}`, 
      {tag: ['@SmokeTesting']}, async ({page}) => {

    await page.goto(`${process.env.TOLGATEM_URL}`);
   // await page.getByPlaceholder('Search Everything').click();
     await page.getByPlaceholder('Search Everything').fill(record.Skill1);
   // await page.keyboard.type(skill.Skill1);
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle(record.Skill1 + ' | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
   });
}



   
   
