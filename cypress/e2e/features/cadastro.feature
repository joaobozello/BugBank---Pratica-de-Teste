Feature: Cadastro de Usuário
          Eu como cliente
          Quero me cadastrar na aplicação
          Para poder fazer transferências e pagamentos

  Background: Acesso a tela de cadastro
    Given Eu estou na tela de criar cadastro de usuário

  Scenario: Campo E-mail vazio
    And Eu preencho o Nome
    And Eu preencho a senha
    And Eu preencho o campo Confirmação Senha com a mesma senha do campo Senha
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem "É campo obrigatório"

  Scenario: Campo E-mail inválido
    And Eu preencho E-mail invalido "teste@teste"
    And Eu preencho o Nome
    And Eu preencho a senha
    And Eu preencho o campo Confirmação Senha com a mesma senha do campo Senha
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem "Formato inválido"

  Scenario: Campo Senha vazio
    And Eu preencho o E-mail
    And Eu preencho o Nome
    And Eu preencho o campo Confirmação Senha
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem "É campo obrigatório"

  Scenario: Campo Confirmação Senha vazio
    And Eu preencho o E-mail
    And Eu preencho o Nome
    And Eu preencho a senha
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem "É campo obrigatório"

  Scenario: Campo Confirmação Senha diferente do campo Senha
    And Eu preencho o E-mail
    And Eu preencho o Nome
    And Eu preencho a senha
    And Eu preencho o campo Confirmação Senha diferente do campo Senha
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem "As senhas não são iguais." no modal

  Scenario: Campo Nome vazio
    And Eu preencho o E-mail
    And Eu preencho a senha
    And Eu preencho o campo Confirmação Senha com a mesma senha do campo Senha
    When Eu clico em Cadastrar
    Then Eu vejo a mensagem "Nome não pode ser vazio." no modal
