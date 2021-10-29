describe('mouse houver feture', ()=>{
    it.skip('click on sign up link test',()=>{


        cy.visit('https://www.flipkart.com/')
        cy.contains('Fashion').trigger('mouseover')

        cy.contains('Women Ethnic').trigger('mouseover')
        cy.contains('Women Sarees').click();

    })

    it('click on sign up link test',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click();
        cy.wait(3000);
        cy.get('.cross').should('be.visible').click()
        cy.wait(3000);
        cy.get('.cart_block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click();
        cy.url().should('include','controller=order')

    })
})