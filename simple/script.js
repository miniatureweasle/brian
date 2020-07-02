const goldenRatio = 1.618;
let width = 1200;
let height = width/goldenRatio

var starQuantity = 10;

//defining canvas 
const canvas =  document.getElementById("starryNight");
canvas.style.backgroundColor = "black";
const ctx = canvas.getContext("2d");

//window.innerWidth/Height sets the canvas element to full the intire size of the page.

canvas.width = width;
canvas.height = height;

//styling stars
var starGlow = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
starGlow.addColorStop(0, "white");
// starGlow.addColorStop(1, "gold");

function star(ctx, x, y, r, p, m)
{
    ctx.save();
    ctx.beginPath();
    ctx.translate(x, y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < p; i++)
    {
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - (r*m));
        ctx.rotate(Math.PI / p);
        ctx.lineTo(0, 0 - r);
    }
    ctx.fill();
    ctx.restore();
}

function box(input, parameter){
    reducedParameter = parameter -100;
    if(input <100){
        input +=100;
    }else if(input >reducedParameter){
        input -=100
    }
    let output = input;
    return output;
}

//generate stars
while(starQuantity != 0){

    //let random = Math.random();

    let xrandom = Math.floor(width*Math.random());
    let yrandom = Math.floor(height*Math.random());

    console.log(box(xrandom, width));
    console.log(box(yrandom, height));

    let boxValueY = box(yrandom, height);
    let boxValueX = box(xrandom, width);

    starQuantity --;
    //ctx.fillRect(xrandom,yrandom,9,9);
    
    ctx.beginPath();
   // ctx.arc(yrandom, xrandom, 3, 0, 2 * Math.PI, false);
   star(ctx,boxValueX, boxValueY,9,5,0.5)
    ctx.fillStyle = "white";
    ctx.strokeStyle = starGlow;
    ctx.fill();
    ctx.stroke()
}

//ctx.fillRect(2000,100,3,3);



const canvasMountain = document.getElementById("mountainRange");
console.log(canvasMountain)
canvasMountain.style.backgroundColor = "black";
//canvasMountain.width =1000;

const ctxM = canvasMountain.getContext('2d');

ctxM.fillStyle="white";
//txM.fillRect(1,1,300,300)

ctxM.beginPath();
ctxM.strokeStyle = "white";
ctxM.moveTo(1, 90);
ctxM.lineTo(50, 50);
ctxM.stroke();