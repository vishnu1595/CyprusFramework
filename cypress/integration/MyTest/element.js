
describe('check element get concept',()=>{

    it('element get testing',()=>{

      cy.visit('http://localhost:8888/');

      // cy.contains('Login').click();
      // cy.url().should('include','/index');
      // cy.get('div.errorMessage').should('be.visible')
      // .and('contain', 'You must specify a valid username and password')
      // .and('have.length',1);
      
      cy.get("input[name='user_name']").type('admin');
      cy.get("input[name='user_password']").type('admin');
      cy.contains('Login').click();
      // cy.get('.tabUnSelected').should('have.length',11);
      // //cy.get('.tabUnSelected').find("a[href*='Accounts']").click();

      // cy.get('#stuffcont_5').within(()=>{
       
      //   cy.get('a').should('contain', 'Prospect Accounts');
      //   cy.contains('Prospect Accounts').click();
      // });
      cy.go('back');
      //cy.go('back', {timeout:5000})
      //or we can use cy.go(-1);
      cy.wait(200)
      cy.go('forward');
      //or we can use cy.go(1);

      

    });


});