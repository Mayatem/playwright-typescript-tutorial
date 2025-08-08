
import {test, expect} from '@playwright/test';
import {parse} from 'csv-parse/sync';
import fs from 'fs'; //to receive csv file we need to import fs and path
import path, { dirname } from 'path';

// Step 1 -> define the test data structor for the type safe purpose:
type TestRocords = { //we specify data for type safety purpose
    Skill1 : string,
    Skill2 : string,
}

// Step 2 -> access the test data from csv file:
const records = parse( //there are 2 parameters fs and path
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')), //location of the testdata csv file
    { //configuration for reading  the test config from csv files
        columns : true,
        skip_empty_lines : true //skips empty lines
    }// Step 3 -> now I will convert records into TestRocords files
) as TestRocords[]//after reading csv file, I will get the data in form of TestRocords


for (const record of records) {
    test(`Data Driven Testing using CSV file in playwright: ${record.Skill1}`, {tag: ['@SmokeTesting']}, async ({page}) => {

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






   
   
