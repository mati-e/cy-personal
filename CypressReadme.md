# Cypress 

Folder structure

fixtures
    To stores data (test data. stub data, API request/response data)

e2e
    AL the tests files (with .cy.js)

plugins
    To run node process (e.g.: DB query) - cy.task()

support
    Reusable custom commands

cypress.config.js
    Cypress configuration file, to change values to a suite or test

package.json
    Enter our customized command in the scripts field. Make the complicated command easy with an alias command fixated to it.

Reference type declarations via jsconfig
    Instead of adding triple slash directives to each JavaScript spec file, some IDEs (like VS Code) understand a common jsconfig.json (or package.json) file in the root of the project. In that file, you can include the Cypress module and your test folders.

    {
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
    }

The Intelligent Code Completion should now show help for cy commands inside regular JavaScript spec files.

Mocha
    JavaScript test framework running on Node.js and in the browser
        suite level
            describe, before(), after ()
        test level
            beforeEach(), afterEach(), it(), specify()

Assertions
Chai is a BDD (Behaviour-driven) / TDD (Test-driven) assertion library for node and the browser that can be delightfully paired with any javascript testing framewors
BDD and TDD chainers: https://docs.cypress.io/guides/references/assertions
Cypress bundles Chai, also extensions for Sinon and jQuery, used for dozens of assertions.


Jquery
It’s a JavaScript library 
It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simplerwith an easy-to-use API that works across a multitude of browsers

CSS 
Cascading Style Sheets is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents

Jquery and CSS
Jquery queries DOM element to apply CSS (styles) Cypress uses the same mechanism to Action on the element

How to get elements

Element name (tag name): input, h1, img, p, div, etc. https://www.w3schools.com/tags/default.asp

Attributes name: href, alt, style, title, src, etc. https://www.w3schools.com/tags/ref_attributes.asp

Syntax to search: tagname[attName = value]
Description: Selects element(s) which matches given combination
Example: cy.get('div[type=username]').type('standard_user')
