//1 - create an exportable class

import {expect, Locator, Page} from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly searchTextBox : Locator;

//2- initialize the page with constructor
constructor(page:Page){
this.page = page;


// find the page elements
this.searchTextBox = page.getByPlaceholder('Search Everything')




}

//4. create methods or actions
async goToURL(){
await this.page.goto(`${process.env.TOLGATEM_URL}`)
}

async searchWithKeywords(keyword: string){
    await this.searchTextBox.click();
    await this.searchTextBox.fill(keyword);
    await this.searchTextBox.press('Enter');
}


}