const { spec } = require("pactum");
const { faker } = require("@faker-js/faker");

/*
ct 001 - criação de usuário no serverest API
*/
it("criação de usuário no serverest API", async () => {
  await spec()
    .post("https://serverest.dev/usuarios")
    .withBody({
      nome: `${faker.person.fullName()}`,
      email: `${faker.internet.email()}`,
      password: `${faker.number.int()}`,
      administrador: "true",
    })
    .expectStatus(201)
    .expectBodyContains("Cadastro realizado com sucesso");
});
