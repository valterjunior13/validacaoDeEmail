var mensagemValidacao = document.querySelector("#mensagemValidacao");
var email = document.querySelector("#email");

function validarEmail() {
  if (email.value.length === 0) {
    mensagemValidacao.textContent =
      "O campo de e-mail é obrigatório! Precisa conter o formato email@domínio.com";
  } else {
    mensagemValidacao.textContent = "";
  }
}
