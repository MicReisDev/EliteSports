export default function initCarrinhoDeCompras(){
const botaoADC = document.querySelector('.btn.adc')
const nomeTenis = document.querySelector(".nomeDoT")
const valorT = document.querySelector(".preco")
const tenisT = document.querySelector(".modal-compra-container-esquerda img")
const tamanhoT = document.querySelector(".tamanho-selec")
const ativo = document.querySelector(".modal-compra-bg")
const tamanhos = document.querySelectorAll("#tamanhos .num")
const tamanhosx = document.querySelectorAll(".num")
const popup = document.querySelector(".continuar-comprando-bg")
const btnContinuar = document.querySelector("#continuar")
const btnCarrinho = document.querySelector("#carrinho-de-compras")
const carrinhoItens = document.querySelector(".car-compras-bg")
const total = document.querySelector(".total")
const inserirCarrinho = document.querySelector(".car-compras")
const abrirC = document.querySelector(".compras img")
const btnPagamento = document.querySelector(".pagar")

abrirC.addEventListener("click",ativaCar)

let carrinho = []

let i = 0

botaoADC.addEventListener("click", valores)
function valores(event){
  event.preventDefault();
  ativo.classList.remove("ativo")
  popup.classList.add("ativo")
  tamanhosx.forEach((i)=> i.classList.remove("ativo"))
  tamanhos.forEach((x)=> x.classList.remove("ativado"))


  const nome = nomeTenis.innerText
  const valor = valorT.innerText
  const tenis = tenisT.getAttribute('src')
  const tamanho = tamanhoT.innerText

  const compras = new CarrinhoCompras(nome, valor,tenis,tamanho)



  carrinho[i] = compras
  i++




}

function CarrinhoCompras(nome, valor,tenis,tamanho){
  this.nome = nome
  this.valor = valor
  this.tenis = tenis
  this.tamanho = tamanho
}

popup.addEventListener("click",sairPopup)
function sairPopup(event){
  if(event.target == popup || event.target == btnContinuar)
popup.classList.remove("ativo")
}


btnCarrinho.addEventListener("click", ativaCar)
function ativaCar(){

  popup.classList.remove("ativo")
  carrinhoItens.classList.add("ativo")

  if (carrinho.length == 0 ){
  const aviso = inserirCarrinho
  const h1 = document.createElement("h1")
  h1.innerText = "Voce ainda não selecionou nenhum item"
  aviso.innerHTML = h1.innerHTML
  total.innerText = ""
  btnPagamento.style.display = "none"
  }else{ 
  inserirCarrinho.innerText="items:"
  btnPagamento.style.display = "flex"

  carrinho.forEach((i)=>{
    
    
    const close = document.createElement("span")
    close.innerText = "X"
    close.classList.add("close")
    
    const item = document.createElement("div")
    item.classList.add("item")

    const nomeProduto = document.createElement("div")
    nomeProduto.classList.add("nomeP")

    const precoProduto = document.createElement("div")
    precoProduto.classList.add("valorP")
    nomeProduto.innerText = "Produto: "+ i.nome
    precoProduto.innerText =  "Valor: "+ i.valor
   
    item.appendChild(nomeProduto)
    item.appendChild(precoProduto)
    item.appendChild(close)
    
    inserirCarrinho.appendChild(item)
    
    
    somar()
    const closer = document.querySelectorAll(".close")
    fecharJanela(closer)
  })
  }
  console.log(carrinho)
}


function somar(){
let somando = 0
let valora = document.querySelectorAll(".valorP")
valora.forEach((i)=>{
  let value = +i.innerText.slice(7,12).trim()
  somando = somando + value
  total.innerText = "Valor total: R$" + somando + ",00"
 
})


  }


carrinhoItens.addEventListener("click", removerA)
function removerA(event){
  
  if(event.target == carrinhoItens){
    limparDados()
    carrinhoItens.classList.remove("ativo")
    popup.classList.remove("ativo")
    const Novototal = document.querySelector(".total")
  }  

}

function limparDados(){
  const itemD = document.querySelectorAll(".item")
  itemD.forEach((i,posi)=>{

    const carrinhoRemovido = document.querySelector(".car-compras")
    carrinhoRemovido.removeChild(i)


  })
}


//let valornegativo = 0
function fecharJanela(closer){


closer.forEach((i,posi)=>{
i.addEventListener("click",removerTenis)
function removerTenis(event){
    const somi = event.target.parentElement.querySelector(".valorP")
    event.target.parentElement.parentElement.removeChild(event.target.parentElement)
    
    let valorSub =  +somi.innerText.slice(7,12).trim()

    //valornegativo = valornegativo + valorSub
    //console.log(valornegativo)
    alteraValor(valorSub)

  
    const novoCar = carrinho.filter(filtro)
    function filtro(iten, index){
     return (index !== posi)
    }
    carrinho = novoCar

}
})

}

function alteraValor(v){




const Novototal = document.querySelector(".total")
const novoV = +Novototal.innerText.slice(15,19).replace(","," ").trim()

const subtracao = novoV - v


  total.innerText = "Valor total: R$" + subtracao + ",00"
}

}