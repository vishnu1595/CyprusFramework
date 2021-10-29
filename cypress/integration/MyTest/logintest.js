describe('my launching my app',()=>{
    it('my test',()=>{
        cy.visit('https://classic.crmpro.com/')

        //cy.title().should('eq', 'CRMPRO  - CRM software for customer relationship management, sales, and support.')
        cy.get('input[name="username"]').type('batchautomation')
        cy.get('input[name="password"]').type('Test@12345')
        cy.get('input[type="submit"]').click()
       // cy.title().should('have','CRMPRO')
        cy.get('contacts').click()
    })
});