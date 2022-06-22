import { Locator, Page, expect } from "@playwright/test";

class HomeLocators{
    readonly lnkLogin = 'a[routerlink="/login"]';
    readonly lnkEditor = 'a[routerlink="/editor"]';
    readonly title = 'title';

}
export class HomePage{
    readonly page: Page;
    readonly locators: HomeLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new HomeLocators();
    }
    async open() {
        await this.page.goto('http://angular.realworld.io/');
    }

    async goToLoginPage() {
        await this.page.click(this.locators.lnkLogin);
    }

    async isTitle(){
        // await this.page.locator(this.locators.title);   
        await expect(this.page.locator(this.locators.title)).toContainText('Conduit');
    }

    async Title(): Promise<Locator> {
        // await this.page.locator(this.locators.title);   
        return this.page.locator(this.locators.title);
    }
}