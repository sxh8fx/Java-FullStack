const PI=3.14159;


document.getElementById("MyButton").onclick=function(){
    let t=document.getElementById("ra").value;
    t=Number(t);
    let a=PI*t*t;
    document.getElementById("h11").textContent="Area of Circle is: "+a;
}
