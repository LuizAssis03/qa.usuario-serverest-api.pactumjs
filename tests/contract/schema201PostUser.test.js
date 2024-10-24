const Joi = require("joi");
const response = require ("pactum");
const schema201PostUsers = require("../../schemas/users.data.schema");

const { spec } = require("pactum");
const { faker } = require("@faker-js/faker");

/*
ct 004 - Validar o schema 201 do metodo POST do endpoint/usuarios
*/
it("Validar o schema 201 do metodo POST do endpoint/usuarios", async () => {
  const { json } = await spec()
    .post("https://serverest.dev/usuarios")
    .withBody({
      nome: `${faker.person.fullName()}`,
      email: `${faker.internet.email()}`,
      password: `${faker.number.int()}`,
      administrador: "true",
    })
    .expectStatus(201)
    .expectBodyContains("Cadastro realizado com sucesso");

  Joi.assert(response.json, schema201PostUsers);
});
