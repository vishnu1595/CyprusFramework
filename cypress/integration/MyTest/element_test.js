describe('launch my app',()=>{
    it('app testing', ()=>{
    cy.visit('https://freshdesk.com/1')
    cy.contains('support')
    cy.contains('support').click()
    cy.url().should('include','/support')

    })
});