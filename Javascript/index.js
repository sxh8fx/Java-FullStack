let decrease=document.getElementById("decrease");
let increase=document.getElementById("increase");
let reset=document.getElementById("reset");
let l=document.getElementById("l");
let count=0;

decrease.onclick=function(){
    count--;
    document.getElementById("l").textContent=count;
}
increase.onclick=function(){
    count++;
    document.getElementById("l").textContent=count;
}
reset.onclick=function(){
    count=0;
    document.getElementById("l").textContent=count;
}

