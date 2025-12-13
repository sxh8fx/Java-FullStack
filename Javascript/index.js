const checkBox=document.getElementById("checkBox");
const UPI=document.getElementById("UPI");
const creditCard=document.getElementById("creditCard");
const debitCard=document.getElementById("debitCard");
const submit=document.getElementById("submit");
const subs=document.getElementById("subs");
const pay=document.getElementById("pay");

submit.onclick = function(){
    if(checkBox.checked){
        subs.textContent="You are Subscribed";
    }
    else{
        subs.textContent="You are NOT Subscribed";
    }
    if(UPI.checked)
        pay.textContent="You are using UPI";
    else if(creditCard.checked)
        pay.textContent="You are using Credit Card";
    else if(debitCard.checked)
        pay.textContent="You are using Debit Card";
    else
        pay.textContent="You are Broke";
}
