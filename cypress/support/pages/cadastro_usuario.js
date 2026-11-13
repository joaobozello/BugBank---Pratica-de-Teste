/// <reference types="cypress"/>

export default {

    preencherEmail(email) {
        cy.get('.card__register').within(() => {
            cy.get('input[name="email"]')
                .type(email)
        } )
    },

    preencherNomeUsuario(nome) {
        cy.get('.card__register').within(() => {
            cy.get('input[name="name"]')
                .type(nome)
        })
    },

    preencherSenha(senha) {

        cy.get('.card__register').within(() => {
            cy.get('input[name="password"]').type(senha)
        })
    },

    preencherConfirmarSenha(confirmarSenha) {
        cy.get('input[name="passwordConfirmation"]')
            .type(confirmarSenha)
    },

    fazerCadastro() {
        cy.get('.card__register')
            .contains('button', 'Cadastrar')
            .click()
    },

    verificaMensagemErro(mensagem) {
        cy.get('.input__warging')
            .should('be.visible')
            .should('have.text', mensagem)
    },

    verificarMensagemErroModal(mensagem) {
        cy.get('#modalText')
            .should('be.visible')
            .should('contain.text', mensagem)
    }
}