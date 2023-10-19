function calculateTip(){
    let amount = document.getElementById("amount").Value;
    let quality = document.getElementById("quality").Value;
    let number = document.getElementById("number").Value;
}
const tip =amount *(quality/100) * number;

document.getElementById("amount-result").innerText=amount;
document.getElementById("tip-result").innerText=tip;