import {test, expect} from '@playwright/test'


test('innIterating matching elements in Playwright', async({page}) => {

  await page.goto('https://github.com/BakkappaN');

const repositoryLinks = await page.$$('.repo'); //matching with 6 elements

console.log('\n=======. For of loop.  ================================\n')
for (const repositoryLink of repositoryLinks){
    const text = await repositoryLink.textContent();
    console.log(`Text from for of  loop: ${text}`);

}

console.log('\n=======. For loop.  =================================\n')
//for loop
for (let index = 0; index < repositoryLinks.length; index++) {
    const element1 = await repositoryLinks[index].textContent();
    console.log(`The element from for loop is: ${element1}`);
}

console.log('\n=======. For loop + nth() method.  ========================\n')

const repoLocator = page.locator('.repo');
const elementCout = await repoLocator.count();

for (let index = 0; index < elementCout; index++) {
   const text1 =  await repoLocator.nth(index).textContent();
    console.log(`The element from for loop + nth() is: ${text1}`);
    
}

})

console.log('\n======. For each loop ================================\n')
test('Use allTextContents for multiple elements', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');

  const repoLocator = page.locator('.repo');
  const texts = await repoLocator.allTextContents();
console.log(texts); //prints texts as an array

  texts.forEach((text, i) => {
    console.log(`Repo ${i + 1}: ${text}`);
  });
});