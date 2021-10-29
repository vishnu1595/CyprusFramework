import 'cypress-file-upload';

Cypress.Commands.add('login',(Email,Password)=>{

    cy.get("[name='user_name']").type("admin");
    cy.get("[name='user_password']").type('admin');
    cy.get('#submitButton').click();

});

Cypress.Commands.add('search',(product)=>{
cy.get('.searchBox').type('lead');
cy.get('.searchBtn').click();
});