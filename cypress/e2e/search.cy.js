describe('Search', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com')
    })

it('searches by typing and pressing ENTER', () => {
    cy.get('#search')
      .should('be.visible')
      .type('healthy juice{enter}')
    cy.get('#maincontent')
      .should('contain', 'Your search returned no results.')
  })

  it('validate Whats new tab', () => {
    cy.get('#ui-id-3 > span').click()
      .get('.base')
  })
});
