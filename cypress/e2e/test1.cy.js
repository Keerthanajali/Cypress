// 2 ways to create a test function
//1.
// it('Google Search', function(){

const { Assertion } = require("chai")
const cypress = require("cypress")
const { checkForRemovedStyleOptions } = require("cypress/mount-utils")


// })

//2.
it('Google Search',()=> {
    cy.visit("https://google.com/")
    cy.get('#APjFqb').type('Automation step by step{Enter}')
    cy.wait(5000)
})


 /*default timeouts is 4 Sec
To add custom timeouts 
  1.  cy.get('.className, {timeout:5000}).type('123{enter}')
        To add custom timeouts at global level- cypress.config.json File
        under e2e:{defaultCommandTimeout:3000,}
3. command level timeouts - cy.wait(5000)
        command level timeouts will take the first priority
       2. global level timeouts will take 2nd priority */

//===========================================================================================================

/*cypress uses java Script, we can use any other languages
to create test functions but cypress converts(transpiles) it as javascript


Assertions in cypress ==> assertions.cy.js
----------------------
1. Implicit
     Inbult Assertions :
              Command in cypress like should() , and() check for the expected condition 
              without having to use any assertion or expected command separately.
2. Explicit
      Not in-built or referred Assertions:
              Have to use specific assertion commands like assert() , expect() */

//==============================================================================================

/* Page Object Model
-------------------------
1. A design principle
2. Keeps the objects & methods separate from test scripts
3. Efficient reusability
4. Easier, Efficient and faster changes & maintenance
*/

                 

