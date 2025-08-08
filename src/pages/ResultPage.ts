import {expect, Locator, Page} from "@playwright/test";

export class ResultPage{
    readonly page: Page;
        readonly linkTitle : Locator;

//2- initialize the page with constructor
constructor(page:Page){
this.page = page;


// find the page elements
this.linkTitle = page.locator('.post-title')
}

//4. create methods or actions

async clickOnPlayList(keyword: string){
    await this.linkTitle.first().click();
 
}


}