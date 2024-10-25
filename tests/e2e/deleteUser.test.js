const { spec, response } = require("pactum")
const { default: deleteUsers } = require("../../qa.core-serverest-api.pactumjs/src/services/users/deleteUsers.service")
const { assert } = require("chai")
const { testDelete } = require("../../data/users/deleteUsers.data")

it ('Excluir usuário', async () => {
    const {json} = await deleteUsers
    assert.equal(json.message, testDelete.mensagemSucesso, "a mensagem é diferente do esperado");
})