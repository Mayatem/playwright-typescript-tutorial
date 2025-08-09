
import {test} from '../../src/fixture/TestFixture';

test('Ppge Object Model Test', async({page, homePage, resultPage, subjectPage, testData })=>{



console.log('Test execution started');


const keyword = String(testData.Module1TestData?.Skill1);
const title = String(testData.Module1TestData?.Skill1) +   ' | Search Results  |  Tolga TEM';


await homePage.goToURL();
await homePage.searchWithKeywords(keyword);

await resultPage.clickOnPlayList(keyword);


await subjectPage.validatePageTitle(title);
console.log('Test execution ended');

console.log(`Skill: ${String(testData.Module1TestData?.Skill1)}`)
console.log(`Skill: ${String(testData.Module1TestData?.Skill2)}`)
console.log(`Skill: ${String(testData.Module1TestData?.Skill3)}`)

});