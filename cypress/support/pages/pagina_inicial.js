/// <reference types="cypress"/>

export default {

    acessarCadastroUsuario() {
        cy.visit('/')
            

        cy.contains('button', 'Registrar')
            .click()
    }

}