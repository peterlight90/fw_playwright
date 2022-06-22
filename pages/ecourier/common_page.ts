import {expect, Locator, Page} from '@playwright/test';

class CommonLocator{
    
}

export class CommonPage{
    readonly page: Page;
    readonly locator: CommonLocator;
}