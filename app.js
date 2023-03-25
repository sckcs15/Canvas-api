const color = document.querySelector("#color");
const canvas =document.querySelector("canvas");
const ctx  =canvas.getContext("2d");
const lineWidth =document.querySelector("#line-width");
const colorOPtions =Array.from(document.getElementsByClassName("color-option"));
const modeBtn =document.getElementById("fill-btn");
const destroyBtn =document.getElementById("destroy");
const eraserBtn =document.getElementById("eraser");
const fileInput = document.getElementById("file");
const textInput = document.getElementById("text");
const saveBtn = document.getElementById("save");
const CANAVAS_WIDTH = 800;
const CANAVAS_HEIGHT = 800;
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth =lineWidth.value;
let isPainting =false;
let isFilling =false;
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
function onColorChange(event){
   ctx.strokeStyle =event.target.value;
   ctx.fillStyle = event.target.value;
}
function onColorClick(event){
    console.log(event.target.dataset);
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value=event.target.dataset.color
}
function onModeClick(){
    if(isFilling){
        isFilling=false;
        modeBtn.innerText="Fill"
    }
    else{
        isFilling=true;
        modeBtn.innerText="Draw"
    }
}
function onCanvasClick(event){
    if(isFilling){
        ctx.fillRect(0,0,CANAVAS_WIDTH,CANAVAS_HEIGHT);
    }
}
function onDestroyClick(event){
    ctx.fillStyle ="#fff";
    ctx.fillRect(0,0,CANAVAS_WIDTH,CANAVAS_HEIGHT);

}
function onEraserClick(event){
    isFilling =false;
    ctx.strokeStyle ="#fff";
    modeBtn.innerText = "Fill";
}
function onFileChange(event){
    const file =event.target.files[0];
    const url = URL.createObjectURL(file);
    const image =new Image();
    image.src = url;
    image.onload =function(){
        ctx.drawImage(image, 200, 200);
        fileInput.value=null;
    }
}
function onDoubleClick(event){
    const text=textInput.value;
    if(text===""){
        ctx.save();
        ctx.lineWidth =1;
        //  ctx.strokeText(text, event.offsetX, event.offsetY);
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }
    
}
function onSaveClick(event){
    const url = canvas.toDataURL();
    const a =document.createElement("a");
    a.href =url;
    a.download = "myDrawing.png";
    a.click();
}
canvas.addEventListener("dblclick", onDoubleClick);
lineWidth.addEventListener("change", onLineWidthChange);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave",cancelPainting );
color.addEventListener("change", onColorChange);
colorOPtions.forEach(
    color => color.addEventListener("click", onColorClick)
    );
    modeBtn.addEventListener("click", onModeClick);
    canvas.addEventListener("click", onCanvasClick );
    destroyBtn.addEventListener("click",onDestroyClick);
    eraserBtn.addEventListener("click", onEraserClick);
    fileInput.addEventListener("change", onFileChange);
    saveBtn.addEventListener("click", onSaveClick);