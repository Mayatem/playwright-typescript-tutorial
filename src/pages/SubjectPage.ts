//1 - create an exportable class

import {expect, Locator, Page } from "@playwright/test";

export class SubjectPage{
    
readonly page: Page;
 

//2- initialize the page with constructor
constructor(page:Page){
this.page = page;

// find the page elements
}

//4. create methods or actions

async validatePageTitle(title: string){
    await expect.soft(this.page).toHaveTitle(title);
    const titleTxt =  await this.page.title();
    console.log('Page Title:', title);
}   


}

