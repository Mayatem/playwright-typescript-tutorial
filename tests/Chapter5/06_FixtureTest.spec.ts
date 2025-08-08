// import {test, expect} from '@playwright/test';
import {test} from '../../src/fixture/TestFixture'
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { SubjectPage } from '../../src/pages/SubjectPage';

test('Global Hook Test', async({page})=>{
console.log('test execution started...')

const keyword = `${process.env.SEARCH_KEYWORDS}`;
const title = `${process.env.SEARCH_KEYWORDS}` +   ' | Search Results  |  Tolga TEM';
//create object of homepage
const homePage= new HomePage(page);
await homePage.goToURL();
//await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);
await homePage.searchWithKeywords(keyword);

//create object of ResultPage
const resultPage = new ResultPage(page);
await resultPage.clickOnPlayList(keyword);


//create object of SubjectPage
const subjectPage = new SubjectPage(page);
await subjectPage.validatePageTitle(title);

console.log('test execution ended...')
});