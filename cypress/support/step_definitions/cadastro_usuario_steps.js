/// <reference types="cypress"/>
import paginaInicial from '../pages/pagina_inicial'
import cadastroUsuario from '../pages/cadastro_usuario'
import { Given, When, Then, Before }  from '@badeball/cypress-cucumber-preprocessor'
import { faker } from '@faker-js/faker'

Before(() => {
    dadosFaker = {
        email: faker.internet.email(),
        nome: faker.person.firstName(),
        senha: faker.internet.password({ length: 10 })
    }
})

Given('Eu estou na tela de criar cadastro de usuário', () => {
    paginaInicial.acessarCadastroUsuario()
})

Given ('Eu preencho E-mail invalido {string}', (email) => {
    cadastroUsuario.preencherEmail(email)
})

Given('Eu preencho o E-mail', (email) => {
    cadastroUsuario.preencherEmail(dadosFaker.email)
}   )

Given('Eu preencho o Nome', (nome) => {
    cadastroUsuario.preencherNomeUsuario(dadosFaker.nome)
})

Given('Eu preencho a senha', (senha) => {
    cadastroUsuario.preencherSenha(dadosFaker.senha)
})

Given('Eu preencho o campo Confirmação Senha com a mesma senha do campo Senha', (confirmarSenha) => {
    cadastroUsuario.preencherConfirmarSenha(dadosFaker.senha)
})  

Given('Eu preencho o campo Confirmação Senha', (confirmarSenha) => {
    cadastroUsuario.preencherConfirmarSenha(dadosFaker.senha)
}) 

Given('Eu preencho o campo Confirmação Senha diferente do campo Senha', (confirmarSenha) => {
    cadastroUsuario.preencherConfirmarSenha('senhaDiferente')
})

When('Eu clico em Cadastrar', () => {
    cadastroUsuario.fazerCadastro()
})

Then('Eu vejo a mensagem {string}', (mensagem) => {
    cadastroUsuario.verificaMensagemErro(mensagem)
})

Then('Eu vejo a mensagem {string} no modal', (mensagem) => {
    cadastroUsuario.verificarMensagemErroModal(mensagem)
})  
