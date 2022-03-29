export default function NumeroA(){

const numero =  document.querySelector(".info-container span")


let atribuicao = 0
const numeroi = +numero.innerText
console.log(numeroi)
const numeroElevado = setInterval(()=>{
atribuicao = atribuicao + 20
numero.innerText = atribuicao
if(atribuicao > numeroi){
  clearInterval(numeroElevado)

}
},50)
}

