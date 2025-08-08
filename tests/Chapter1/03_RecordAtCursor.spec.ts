import { test, expect } from "@playwright/test";

test("Record at Cursor Test", async ({ page }) => {
  // Step 3: go to URL
  await page.goto("http://www.google.com/");

  // Step 4: search with keywords
  await page
    .getByRole("combobox", { name: "Search" })
    .fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  // Step 5: Click on playlist
  await page
    .getByRole("link", { name: "Playwright by Testers Talk☑️" })
    .first()
    .click();

  // Step 6: Validate web page title
  await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");

  await expect(page.getByRole("link", { name: "#1 Playwright Tutorial Full" })).toBeVisible();
  await expect(page.locator("ytd-playlist-video-list-renderer")).toContainText("#1 Playwright Tutorial Full Course 2024 | Playwright Testing Tutorial"
  );

  await expect(page.getByRole("link", { name: "#2 Playwright API Testing" })).toBeVisible();
  await expect(page.locator("ytd-playlist-video-list-renderer")).toContainText("#2 Playwright API Testing Tutorial Crash Course 2024");

  await expect(page.getByRole("link", { name: "Testing Microsoft D365 CRM" })).toBeVisible();

  await expect(page.locator("ytd-playlist-video-list-renderer")).toContainText("Testing Microsoft D365 CRM App. with Playwright");
});
