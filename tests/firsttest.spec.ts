import {test} from '@playwright/test';
import {HomePage} from '../pages/angular_demo/homepage'
import { LoginPage } from '../pages/angular_demo/login_page';

test('Ahihi for page object model testing @hihi', async ({page}) =>{
    const homepage = new HomePage(page)
    const loginpage = new LoginPage(page)

    await homepage.open();
    await homepage.goToLoginPage();
    // await homepage.isTitle();
    await loginpage.isLoginPageDisplay();
});