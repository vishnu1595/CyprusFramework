// beforeEach('Lanching webapp and ruuning login script',()=>{
// cy.visit('http://localhost:8888/');
// cy.login('admin','admin');
// })

before(()=>{
    cy.visit('http://localhost:8888/');
    cy.login('admin','admin');
})

describe('test for search features', ()=>{

    it('should search',()=>{
        cy.search('lead');
        cy.get('#global_search_total_count').should('be.visible');
    })

    it('should Navigate to home page',()=>{
        cy.get('.tabSelected').click();
        cy.url().should('contain','Home');
    })

})