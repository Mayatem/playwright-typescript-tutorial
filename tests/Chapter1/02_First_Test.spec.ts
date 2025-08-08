// Step 1: import playwright module
import { test, expect } from "@playwright/test";

// Step 2: Write test
test("My First Playwright TypeSctipt Test", async ({ page }) => {
  // Step 3: go to URL
  await page.goto("http://www.google.com/");

  // Step 4: search with keywords
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  // Step 5: Click on playlist
  await page
    .getByRole('link', { name: 'Playwright by Testers Talk☑️' })
    .first()
    .click();

  // Step 6: Validate web page title
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
});


// To run a specific test --> npx playwright test Chapter1/02_First_Test.spec.ts
// running test from terminal specify browser name --> npx playwright test example.spec.ts --project='Google Chrome'
//  npx playwright test example.spec.ts --project='Microsoft Edge'
// npx playwright test example.spec.ts --project='firefox'
// playwright codegen -> npx playwright codegen
