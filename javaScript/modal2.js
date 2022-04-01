export default function initModal2(){
const imgs = document.querySelectorAll(".tenis img")
const modal = document.querySelector(".tenis-img")
const ativo = document.querySelector(".modal-tenis")
const sair = document.querySelector(".modal-tenis-sair")


imgs.forEach((i)=>{
  function imagens(event){
  ativo.classList.toggle("ativo")
  let imag = i.getAttribute("src")
  modal.setAttribute("src", imag)
  }
  i.addEventListener("click", imagens)
})



function saindo(){
  ativo.classList.toggle("ativo");
}

sair.addEventListener("click", saindo)
window.addEventListener("click", function(event){if (event.target == ativo){saindo()} })

const tamanho = document.querySelectorAll(".num")
tamanho.forEach((i)=>{

  function selec(){


    tamanho.forEach((x)=> {

      if (x == i){    i.classList.toggle("ativo")}
      else{
      x.classList.remove("ativo")}})


  }
  i.addEventListener("click",selec)
})
}