describe('dropdown feature', ()=>{
    
    it.skip('with select tag',()=>{
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
        cy.get('#Form_submitForm_Country')
        .select('India').should('have.value','India');

    })



    
    it.skip('without select tag',()=>{
        cy.visit('https://www.google.com/')
        cy.get("[name='q']").type('cypress')
        cy.get('.erkvQe').find('li span').contains('cypress tree').click();
      
    })
})