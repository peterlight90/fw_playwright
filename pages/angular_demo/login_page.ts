import { Page, expect } from "@playwright/test";

class LoginLocators{
    readonly lblSignIn = 'text=Sign in';

}

export class LoginPage{
    readonly page: Page;
    readonly locators: LoginLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new LoginLocators;
    }

    async isLoginPageDisplay(){
        expect(this.page.locator(this.locators.lblSignIn)).toBeEnabled;    
    }
}