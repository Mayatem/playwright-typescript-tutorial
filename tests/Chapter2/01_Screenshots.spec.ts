import { test, expect } from "@playwright/test";

test('Capture Screenshost in playwright', async ({ page }) => {

  await page.goto('https://www.youtube.com/@testerstalk');


  //capture screenshot of element
await page.locator('#page-header-container').screenshot({path: './screenshots/ElementScreenshot.png'});
  
//current visible page screenshot
await page.screenshot({path: './screenshots/VisiblePageScreenshot.png'});
  

  //capture full page screenshot
  await page.screenshot({path: './screenshots/FullPageScreenshot.png', fullPage: true});

});