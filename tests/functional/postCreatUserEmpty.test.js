const { spec } = require("pactum");

/*
ct 003 - Validação de tentativa de criação de usuario sem informar os dados no body API serverrest
*/
it("Validação de tentativa de criação de usuario sem informar os dados no body API serverrest", async () => {

  await spec()
    .post("https://serverest.dev/usuarios")
    .withBody({
      nome: "",
      email: "",
      password: "",
      administrador: "",
    })
    .expectStatus(400)
    .expectBodyContains("nome não pode ficar em branco")
    .expectBodyContains("email não pode ficar em branco")
    .expectBodyContains("password não pode ficar em branco")
    .expectBodyContains("administrador deve ser 'true' ou 'false'");
});
