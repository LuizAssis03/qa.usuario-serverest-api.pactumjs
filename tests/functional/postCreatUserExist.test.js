const { spec } = require("pactum");

/*
ct 002 - Validação tentativa de registro de usuario já criado na API serverrest
*/
it("Validação tentativa de registro de usuario já criado na API serverrest", async () => {
  await spec()
    .post("https://serverest.dev/usuarios")
    .withBody({
      nome: "Luiz Assis",
      email: "luiz@gmail.com",
      password: "123456789",
      administrador: "true",
    })
    .expectStatus(400)
    .expectBodyContains("Este email já está sendo usado");
});
