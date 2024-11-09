import { LoginHrm } from "./pages/loginHrm";
const loginPage = new LoginHrm()

it('pomTestHRM',()=>{
    loginPage.loadPage()
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    
})