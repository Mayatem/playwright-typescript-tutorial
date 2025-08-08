import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('This will execute before all the tests');
});

test.beforeEach(async () => {
  console.log('This will execute before each test case');
});

test.afterAll(async () => {
  console.log('This will run once after all tests');
});

test.afterEach(async () => {
  console.log('This will run once after each test case');
});

test('drop down menu', async ({ page }) => {
  await console.log('Test execution started...');



 await test.step('Navigate the URL - Facebook', async () => {
    await page.goto('https://www.facebook.com/');
  });
  


await test.step('click create account button', async () => {
await page.getByRole('button', { name: 'Create new account' }).waitFor({ state: 'visible' });
await page.getByRole('button', { name: 'Create new account' }).click();

});


  // Select month using value
  await test.step('Select month using value', async () => {
    await page.getByLabel('Month').selectOption({ value: '9' });
  await expect(page.locator('#month > option')).toHaveText(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
//if you don't care about order, you should fetch all texts and check using an 
// unordered comparison, or use .toContainText() on individual options. 
});



  // Select day using index
  await test.step('Select day using index', async () => {
    await page.locator('#day').selectOption({ index: 15 }); // 16th day
    await expect(page.locator('#day')).toHaveValue('16');
  });



 // Select year using visible text (label)
  await test.step('Select year using visible text', async () => {
    await page.locator('#year').selectOption({ label: '2016' });
    await expect(page.locator('#year')).toHaveValue('2016');
  });

 

});

/*
import { test, expect } from '@playwright/test';

test.describe('Facebook Signup Dropdown Validation', () => {

  test.beforeAll(async () => {
    console.log('This will execute before all the tests');
  });

  test.beforeEach(async () => {
    console.log('This will execute before each test case');
  });

  test.afterAll(async () => {
    console.log('This will run once after all tests');
  });

  test.afterEach(async () => {
    console.log('This will run once after each test case');
  });

  test('drop down menu', async ({ page }) => {
    console.log('Test execution started...');

    await test.step('Navigate to Facebook', async () => {
      await page.goto('https://www.facebook.com/');
    });

    await test.step('Click "Create new account" button', async () => {
      const createBtn = page.getByRole('button', { name: 'Create new account' });
      await createBtn.waitFor({ state: 'visible' });
      await createBtn.click();
    });

    await test.step('Select month using value and verify', async () => {
      await page.getByLabel('Month').selectOption({ value: '9' }); // September
      const selectedMonth = await page.getByLabel('Month').inputValue();
      expect(selectedMonth).toBe('9');
    });

    await test.step('Select day using index and verify', async () => {
      const daySelect = page.locator('#day');
      await daySelect.selectOption({ index: 15 }); // 16th day
      await expect(daySelect).toHaveValue('16');
    });

    await test.step('Select year using label and verify', async () => {
      const yearSelect = page.locator('#year');
      await yearSelect.selectOption({ label: '2016' });
      await expect(yearSelect).toHaveValue('2016');
    });

    await test.step('Verify all month options are present in order', async () => {
      const expectedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthOptions = page.locator('#month > option');
      await expect(monthOptions).toHaveText(expectedMonths);
    });
  });

});
*/

