
import {test, expect} from '@playwright/test';
import testData from '../../test-data/qa/testdata.json' //importing test data from file

type TestData = { //converding inport into json object
    TestDataSet1:{ //json object
        Skill1: string //object key - value pair
        Skill2: string
    },

    TestDataSet2:{
        Skill1: string
        Skill2: string
    }
}
const typedTestData = testData as TestData; //this data contains the list of JSON object

for (const dateSetName in typedTestData){
   const skill =  typedTestData[dateSetName as keyof TestData];


   test(`Data Driven Testing using JSON file in playwright: ${skill.Skill2}`, async ({page}) => {

    await page.goto(`${process.env.TOLGATEM_URL}`);
   // await page.getByPlaceholder('Search Everything').click();
     await page.getByPlaceholder('Search Everything').fill(skill.Skill2);
   // await page.keyboard.type(skill.Skill1);
    await page.keyboard.press('Enter');
    await expect.soft(page).toHaveTitle(skill.Skill2 + ' | Search Results  |  Tolga TEM');
    const title = await page.title();
    console.log('Page Title:', title);
   });

}




   
   
