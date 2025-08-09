//1 - create an exportable class

import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly searchTextBox: Locator;

  //2- initialize the page with constructor
  constructor(page: Page) {
    this.page = page;

    // find the page elements
    this.searchTextBox = page.getByPlaceholder("Search Everything");
  }

  
  //4. create methods or actions
  // we create qa ad dev environment which data comes based on the environment
//   async goToURL() {
//     if (process.env.TEST_XECUTION_ENV == "qa") {
//       await this.page.goto(`${process.env.TOLGATEM_URL}`); //use qa url
//       console.log(`Tests are running ${process.env.TEST_XECUTION_ENV} env.`);
//     } else if (process.env.TEST_XECUTION_ENV == "dev") {
//       await this.page.goto(`${process.env.TOLGATEM_URL}`); // use dev url
//       console.log(`Tests are running ${process.env.TEST_XECUTION_ENV} env.`);
//     }
//   } // as I use only one url. I dint't put different urls for qa and dev environmement


async goToURL() {
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.TOLGATEM_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.TOLGATEM_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
    }

  async searchWithKeywords(keyword: string) {
    await this.searchTextBox.click();
    await this.searchTextBox.fill(keyword);
    await this.searchTextBox.press("Enter");
  }
}