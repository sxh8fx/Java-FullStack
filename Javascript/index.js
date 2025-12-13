// To Accept User Name
// Use Window prompt or professional html textbox
//1.
// let username =window.prompt("What's your username?");
// console.log(username);
//2.
let n;
document.getElementById("MyButton").onclick=function(){
    n=document.getElementById("user").value;
    document.getElementById("h11").textContent="Welcome "+n+"!";
};
