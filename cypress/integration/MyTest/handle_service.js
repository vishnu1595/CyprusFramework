///<reference types="cypress" />

describe("handling uncaught exceotion", ()=>{
    
    it("test for handling uncaught exception", ()=>{
       cy.visit("https://app.hubspot.com/login",{failOnStatusCode: false});
       cy.get('#username').type("naveen@gmail.com");
       cy.get('password').type('naveen@g123');
       cy.get('#loginBtn').click();
       

    });
});