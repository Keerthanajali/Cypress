it('Assertions demo',()=> {
    cy.visit("https://example.cypress.io/")
    cy.contains('get').click()
    cy.get('#query-btn')
    //=====implicit assertion
        .should('contain','Button')
        .should('have.class','query-btn')
        // .should('have.text',' .........')
        // .should('have.html',' .........')
        .should('be.visible')
        // .should('be.disabled')
        // .should('be.focused')
        //should-equal:
               //.invoke('attr','id').should('equal','query-btn')  ===> this is equals to should-have.class
        
        // and ===> for chained assertion

    //=====Explicit assertion
   /* expect :
    expect(true).to.be.true
    expect(true).to.be.false
    expect(true).to.not.equal()
    expect(true).to.be.a('string')
    expect(true).to.be.null
    expect(true).to.exist */
    
    /* Assert : 
    assert.equal(4,4, 'Not Equal')
    assert.equal(4,'4', 'Not Equal')
    assert.strictEqual(4,'4', 'Not Equal')
    assert.equal(4,5, 'Not Equal')
            .notEqual
            .strictEqual
            .isAbove
            .isBelow
            .exists
            .notExists
            .true
            .false
            .isString
            .isNotString */




        
})