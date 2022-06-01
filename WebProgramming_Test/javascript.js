var colortf = true;
function changeColor(obj){
    if(colortf==true)
    {
        document.body.style.backgroundColor = "beige";
        obj.innerHTML = "배경색 azure로 바꾸기";
        colortf = false;
    }
    else{
        document.body.style.backgroundColor = "azure";
        obj.innerHTML = "배경색 beige로 바꾸기";
        colortf = true;
    }
}


var spantf = true;
function changespan(){
    var spans = document.getElementsByClassName("emphasis");
    if(spantf==true)
    {
        for(var i = 0; i<spans.length; i++)
        {
            spans[i].style.color = "red";
        }
        spantf = false;
    }
    else{
        for(var i = 0; i<spans.length; i++)
        {
            spans[i].style.color = "black";
        }
        spantf = true ;
    }
}


function cheerPosicube(obj){
    var newDIV = document.createElement("div");
    newDIV.innerHTML = "포지큐브 번창하세요!! (텍스트를 클릭하면 지워집니다.)";
    newDIV.onclick = function(){
        var p = this.parentElement;
        p.removeChild(this);
    };
    newDIV.onmouseover = function(){
        this.style.fontStyle = "italic";
        this.style.fontWeight = "bold";
        this.style.fontSize = "1.5em";
    }
    newDIV.onmouseout = function(){
        this.style.fontStyle = "normal";
        this.style.fontWeight = "normal";
        this.style.fontSize = "1em";
    }
    obj.parentElement.appendChild(newDIV);
}


var counttime = document.getElementById("counttime");
var timerID = setInterval("count()", 1000);
var cnt = 0;
function count(){
    cnt+=1;
    counttime.innerHTML = "페이지에 머무른 시간 : " + cnt + "초"
}

var canvas, context; 
window.onload = function(){
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");

    context.lineWidth = 2;

    canvas.addEventListener("mousemove", function(e){move(e)}, false);
    canvas.addEventListener("mousedown", function(e){down(e)}, false);
    canvas.addEventListener("mouseup", function(e){up(e)}, false);
    canvas.addEventListener("mouseout", function(e){out(e)}, false);
}

var startX = 0, startY = 0;
var drawing = false;
function draw(curX, curY){
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e){
    startX = e.offsetX;
    startY = e.offsetY;
    drawing = true;
}
function up(e){
    drawing = false;
}
function move(e){
    if(!drawing)
        return;
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX;
    startY = curY;
}
function out(e){
    drawing = false;
}