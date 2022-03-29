export default function initModal(){
const botAbrir = document.querySelector('[data-modal="abrir"]');
const botFechar = document.querySelector('[data-modal="fechar"]');
const modal = document.querySelector('[data-modal="conteudo"]');

if (botAbrir && botFechar && modal) {
  function abrirModal(event) {
    event.preventDefault();
    modal.classList.add("ativo");
  }

  function fecharModal(event) {
    modal.classList.remove("ativo");

    if (event.key === "E") {
      modal.classList.remove("ativo");
    }
  }

  function fecharModal2(event) {
    if (event.target === this) {
      fecharModal(event);
    }
  }

  botAbrir.addEventListener("click", abrirModal);
  botFechar.addEventListener("click", fecharModal);
  modal.addEventListener("click", fecharModal2);
}
}