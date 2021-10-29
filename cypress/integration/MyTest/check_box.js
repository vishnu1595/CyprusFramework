describe('handling check boxws', ()=>{
    it('check in sanpdeal filter',()=>{

        cy.visit('https://www.snapdeal.com/')
        cy.get('#inputValEnter').type('laptop')
        cy.contains('Search').click();
        // cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) input')
        // .check({force: true});
        // cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) input')
        // .should('have.checked','checked')

        cy.get('.filter-inner[data-name="Brand"] [type="checkbox"]')
         .check({force: true});
         cy.get('.filter-inner[data-name="Brand"] [type="checkbox"]')
        .should('have.checked','checked')
        cy.get('.filter-inner[data-name="Brand"] [type="checkbox"]')
         .uncheck({force: true});
        


    })
    it.only('click on sign up link test',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Women').click();
        cy.get('.checkbox').check().parent().should('have.class','chekced')

    })

})