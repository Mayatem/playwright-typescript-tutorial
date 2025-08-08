import { test, expect } from "@playwright/test";

test("Github login - negative test", async ({ page }) => {
  await test.step("Navigating to URL", async () => {
    await page.goto("https://github.com/");
    await page.getByRole("link", { name: "Sign in" }).click();
    await page.getByRole("textbox", { name: "Username or email address" })
              .click();
  });

  await test.step("Enter username & password", async () => {
    await page.getByRole("textbox", { name: "Username or email address" })
              .fill("testere1");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("mester123");
  });

  await test.step("Clicki on the sign in", async () => {
    await page.getByRole("button", { name: "Sign in", exact: true }).click();
  });

  await test.step("Validate the error message", async () => {
    await expect(page.getByRole("alert")).toContainText("Incorrect username or password.");
  });

});
