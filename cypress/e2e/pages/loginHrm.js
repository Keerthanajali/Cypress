//export - keyword to access this class in another file 
export class LoginHrm{
    login_username =':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_password =':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button='.oxd-button'
    
    
    loadPage(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

    }
    enterUsername(username){
        cy.get(this.login_username).type(username)

    }
    enterPassword(password){
        cy.get(this.login_password).type(password)

    }
    clickLogin(){
        cy.get(this.login_button).click()

    }

}