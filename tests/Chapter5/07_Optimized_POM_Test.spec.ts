//nimport {test, expect} from '@playwright/test';
// import { HomePage } from '../../src/pages/HomePage';
// import { ResultPage } from '../../src/pages/ResultPage';
// import { SubjectPage } from '../../src/pages/SubjectPage';

import {test} from '../../src/fixture/TestFixture';

test('Ppge Object Model Test', async({page, homePage, resultPage, subjectPage})=>{


await page.setViewportSize({
    width: 640,
    height: 480,
})

console.log('Test execution started');


const keyword = `${process.env.SEARCH_KEYWORDS}`;
const title = `${process.env.SEARCH_KEYWORDS}` +   ' | Search Results  |  Tolga TEM';


await homePage.goToURL();
await homePage.searchWithKeywords(keyword);

await resultPage.clickOnPlayList(keyword);


await subjectPage.validatePageTitle(title);
console.log('Test execution ended');
})