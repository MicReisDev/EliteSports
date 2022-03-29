export default function dropMenu(){
const dropmenu = document.querySelector(".dropdown-menu")
const logo = document.querySelector(".logo")

const logoTXT = document.querySelector(".logo-txt")
const span = document.querySelector(".logo-txt span")

function ativar(){
  dropmenu.classList.add("ativo")
  logoTXT.style.letterSpacing = "1.5px"
  span.classList.add("cor")
}


logo.addEventListener("mouseenter",ativar)

function fechar(event){
  dropmenu.classList.remove("ativo")
  logoTXT.style.letterSpacing = "0"
  span.classList.remove("cor")
  
}

logo.addEventListener("mouseleave", fechar)
}
