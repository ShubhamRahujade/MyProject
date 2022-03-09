/// <reference types = "cypress" />

// Alerts 
// Basic 3 Types
// 1) window.alert()
// 2) window.confirm()
// 3) window.prompt()



describe('Validate Various Tyoes Of Alerts On Browser',()=>{

    it('Type 1 - alert',()=>{

        cy.visit('https://webdriveruniversity.com/')
        cy.get('.section-title > h1').click()
    })
})