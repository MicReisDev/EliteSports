export default function initCarrosel2(){
 const imgs = document.getElementById("carrosel-img")
 const imag = document.querySelectorAll(".carrosel-container img")

 let i = 0;

 

 function carrosel(){
  i++;

  if(i > imag.length -1){
    i = 0;
  }
  imgs.style.transform = `translateX(${-i * 1300}px)`;
 }

 setInterval(carrosel, 3000);
}