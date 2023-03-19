const canvas =document.querySelector("canvas");
const ctx  =canvas.getContext("2d");
const lineWidth =document.querySelector("#line-width");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth =lineWidth.value;
ctx.strokeStyle = "green";
let isPainting =false;
function onMouseMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
 ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown(event){
    isPainting =true;
}
function cancelPainting(event){
    isPainting=false;
}
function onLineWidthChange(event){
    ctx.lineWidth =event.target.value;
}
lineWidth.addEventListener("change", onLineWidthChange);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting );