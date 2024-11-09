// 2 ways to create a test function
//1.
// it('Google Search', function(){

// const { Assertion } = require("chai")
// const cypress = require("cypress")
// const { checkForRemovedStyleOptions } = require("cypress/mount-utils")


// })

//2.
// it('Google Search',()=> {
//     cy.visit("https://google.com/")
//     cy.get('#APjFqb').type('Automation step by step{Enter}')
//     cy.wait(5000)
// })


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
5. In POM we have to create separate class for each page
       e2e folder > create new folder (Pages) > create a js file(loginHrm.js)
       Inside js file create separate function for each action
       Import this js file in test file to make use of these functions(pomTestHRM.cy.js)
       Create variable for imported class (pomTestHRM.cy.js > const loginPage = new loginHrm())
       
       */
//=======================================================================
/* App Actions - mostly used in white box testing
--------------------
1. We can change the state of an application without intracting with UI
 ie. we can change the application state from loged out to logged in from backend

2. needs backend access to do app actions
                 
*/
//=======================================================================
/* Group tests in cypress - OrangeHRM.cy.ts
-------------------------------
1. we can group all it blocks under describe block 
2. it.only -> only runs the particular it block
3. it.skip -> skips the it block
4. beforeEach(()=>{ ... }) => similar to before method
  i)   if we use beforeEach within describe block it runs before each test(it block)
  ii)  Outside describe block - runs before each test in that spec file(ie. if we have any tests outside describe block if we put beforeeach 
         outside describe block, this beforeeach will run before all the it blocks those are outside describe block)
  iii) in support file -> e2e.js file -> it runs before every tests in every spec file.
      */

  //==========================================================================

  /*Run cypress tests from CLI-Command Line Interface
  ------------------------------------------------
  1. Why CLI ?
        Excuting test scripts from CLI is easier, faster, efficient
        less memory consumption
        CLI will be useful to Integrate testing with external process (like CI/CD
  2. Run cypress test in CLI
      way i) Open terminal in vs code and run command 
            npx cypress run -> Runs all the test files under e2e folder
            npx cypress run -h -> to get all npx run commands
            npx cypress run -s .\cypress\e2e\OrangeHRM.cy.js -> to run specific file
      way ii) Open package.json file
               Add under scripts section
               "allCyTest": "cypress run" -> this will run all test files
               in terminal -> npm run allCyTest -> enter
               Everything under this section can be run with npm run command*/ 

//==================================================================

/** Package.json
 -------------------------------
 1. Every node.js project has package.json file located in the root folder
 2. This file have the 
     info about the project
     dependencies list
3.  to create -> npm init or npm init --y
     npm install -> installs both dev and normal dependencies
     npm install --dev -> installs only dev dependencies
     npm install --prod -> will not include dev dependencies

 */
//=====================================================================================================
/**File handling
 --------------------------------
1. Read files using fixture()
      i)   Create a new spec file
      ii)  Add a file under fixtures folder
      iii) Create a test and add command
2. Read files using readFile()
3. Write files using writeFile()

 */