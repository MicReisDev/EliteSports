export default function tooltip() {



  function top(){

  const tips = document.querySelectorAll("[data-tooltip]");
  tips.forEach((i) => {
    i.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tipbox = criarTip(this);

    this.addEventListener("mousemove", mouseMovement);
    function mouseMovement(event) {
      tipbox.style.top = event.pageY + 10 + "px";
      tipbox.style.left = event.pageX + 10 + "px";
    }
    this.addEventListener("mouseleave", mouseLeave);
    function mouseLeave() {
      tipbox.remove();
    }
  }

  function criarTip(element) {
    const toolTipBX = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBX.classList.add("tooltip");
    toolTipBX.innerText = text;
    document.body.appendChild(toolTipBX);
    return toolTipBX;
  }
}

setInterval(top,500)

}
