describe('reload page', ()=>{

    it('reload page test', ()=>{

        cy.visit("http://localhost:8888/")
        cy.contains('Login').click();
        cy.reload();
    });

});