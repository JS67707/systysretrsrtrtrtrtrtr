var mouseEvent="";
var lastX,lastY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{    
mouseEvent="mouseup";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_X=e.clientX-canvas.offsetLeft;
current_Y=e.clientY-canvas.offsetTop; 


if (mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;


    console.log("Last position of x and y coordinates = ");
    console.log("x = "+ lastX+"y = "+lastY);
    ctx.moveTo(lastX,lastY);

    console.log("current position of x and y coordinates = ");
    console.log("x = "+ current_X+"y = "+current_Y);
    ctx.lineTo(current_X,current_Y);
    ctx.stroke();
}
lastX=current_X;
lastY=current_Y;
}