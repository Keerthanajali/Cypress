
describe('All Login Tests', () => {
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    // it.only('OrangeHRM', () => {
    //     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    //     cy.get('.oxd-button').click()
    //     cy.contains('My Info').click()
    // })
    it('OrangeHRM', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.contains('My Info').click()
    })
    it('OrangeHRM2', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin1234')
        cy.get('.oxd-button').click()
        cy.contains('My Info').click()

    })

})