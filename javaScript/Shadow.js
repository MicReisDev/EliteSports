export default function shadow(){

const divS = document.querySelectorAll(".linha-item")
const imagemS = document.querySelectorAll(".linha-item img")
const botS = document.querySelectorAll(".linha-item span")
 divS.forEach((item,index)=>{

  function adcbtn(){
    botS.forEach((x, xindex)=>{
      if(xindex == index){
        x.classList.add("ativo")
        imagemS.forEach((img, ind)=>{
          if(ind == index){
            //img.style.filter = "blur(4px)"
            /*item.style.border = "1px solid white"*/
          }
        })
      }
    })
  }
  item.addEventListener("mouseenter", adcbtn)


  function removebtn(){

    botS.forEach((x, xindex)=>{

      
      if(xindex == index ){
        x.classList.remove("ativo")
        imagemS.forEach((img, ind)=>{
          if(ind == index){
            img.style.filter = "none"
            //item.style.border = "1px solid black"
          }
        })
      }
      
    })
    

  }


  item.addEventListener("mouseleave",removebtn)

})
}