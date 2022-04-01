export default function initCarrinho(){

const ativo = document.querySelector(".modal-compra-bg")//modal-tenis
const tamselec = document.querySelector(".tamanho-selec")
const tamanhos = document.querySelectorAll("#tamanhos .num")
const tamanhosx = document.querySelectorAll(".num")
const ativarT = document.querySelector(".alterar-t")
const mensagem = document.querySelector(".modal-compra-container-direita h1")
const nomeTenis = document.querySelector(".nomeDoT")
const botAdcCarrinho = document.querySelector(".adc")



const botCarrinho = document.querySelectorAll("main .btn.car")
botCarrinho.forEach((i)=> i.addEventListener("click",carrinho))

function carrinho(event){//função que seleciona o modal de carrinho de compras e joga as informações do tenis selecionado

const cars = document.querySelector(".tamanhos-carrinho")

const arrayCars = Array.from(cars.classList)
if(arrayCars.includes("ativo")){
  cars.classList.remove("ativo")
}
 const imagem = event.path[2]




 
  atv() //seleção de tamanho debug
  ativar(imagem.children[0]) //ativa o modal-carrinho
  tamanhoSelec()

}

function atv(){
  mensagem.innerText = "Você não selecionou o tamanho"
  tamanhosx.forEach((i)=>{ 
  const ArrayI = Array.from(i.classList)
  if(ArrayI.includes("ativo")){
    debug(i)
  }
})
}

function debug(arg){
  const listaC = Array.from(arg.classList)
  if (listaC.includes("ativo")){
  ativarT.style.display = "inline-block";
  mensagem.innerText = "Você selecionou o tamanho";
  }}


function ativar(i){
const nomeT = i.alt
nomeTenis.innerText = nomeT
const preco = document.querySelector(".preco")
const valor = i.getAttribute("value")
preco.innerText = valor
ativo.classList.add("ativo")
const atributo = i.getAttribute("src")
let imag = ativo.querySelector("img")
imag.setAttribute("src",atributo)
}





ativarT.addEventListener("click", ativa)

function ativa(){
mensagem.innerText = "selecionar tamanho:";
const car = document.querySelector(".tamanhos-carrinho")
car.classList.toggle("ativo")

tamanhos.forEach((i)=>{
  i.addEventListener("click", vai)
  function vai(){

    tamanhos.forEach((x)=>{
    if(x == i){    
      
      x.classList.toggle("ativado")
      tamselec.innerText = x.value
      
    }else{
      x.classList.remove("ativado")
      
    }

  }
  )


  }
}

)




}

//sai do modal qunado clica fora do conteudo do modal
const remove = document.querySelector(".modal-compra-bg")
remove.addEventListener("click",remover)

function remover(event){

if(event.target === ativo){
  ativo.classList.remove("ativo")
  tamanhosx.forEach((i)=> i.classList.remove("ativo"))
  tamanhos.forEach((x)=> x.classList.remove("ativo"))
  tamselec.innerText = ""
  ativarT.style.display = "none"
  botAdcCarrinho.classList.remove("ativo")
}
}


function tamanhoSelec(){ //função responsável por pegar o valor do tenis selecionado e colocar a no modal de carrinho de compras
  const tamanho = document.querySelector(".num.ativo")
  const x = tamanho.getAttribute("value")

  tamanhos.forEach((i)=>{

  if(i.value == x) {
  i.classList.add("ativo") 
  tamselec.innerText = x
  botAdcCarrinho.classList.add("ativo")
}


}
)

}






}


