export default function dropMenu2(){
const menu = document.querySelectorAll(".nav2-container-lista>li")
menu.forEach((i,index)=>{

  i.addEventListener("mouseenter", ativar)
  function ativar(event){
    console.log(event.target.children)
    console.log(menu)
  if(event.target === menu[index])
  {event.target.children[1].classList.add("ativa")}

  }
}

)
menu.forEach((i,index)=>{

  i.addEventListener("mouseleave", ativar)
  function ativar(event){

  event.target.children[1].classList.remove("ativa")

  }
}

)





}

