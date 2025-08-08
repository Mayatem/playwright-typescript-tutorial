import { test as base } from '@playwright/test';
import { ResultPage } from '../pages/ResultPage';
import { HomePage } from '../pages/HomePage';
import { SubjectPage } from '../pages/SubjectPage';

export const test = base.extend<{
    saveLogs: void; 
    homePage: HomePage;
    resultPage: ResultPage;
    subjectPage: SubjectPage;
}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global before is running...');

        await use();

        console.log('Global afterEach is running...');
    },
    { auto: true }],
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    resultPage: async ({page}, use) => {
        const resultPage = new ResultPage(page);
        await use(resultPage);
    },

    subjectPage: async ({page}, use) => {
        const subjectPag = new SubjectPage(page);
        await use(subjectPag);
    }

});

export { expect } from '@playwright/test';