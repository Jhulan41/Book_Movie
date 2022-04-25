// Store the wallet amount to your local storage with key "amount"
let p =  localStorage.getItem("amount") || 0; 
let w = document.getElementById("wallet")
w.innerText=p;
function addMoney(){

    let money = document.getElementById("amount").value;
    let rupees = +money;
    let balance = localStorage.getItem("amount") ;
    let bal = +balance;
    let sum = rupees + bal;
    

console.log(sum);
// console.log(balance);
// console.log(money);
//  money = money + money;
 let wallet = document.getElementById("wallet") ;
 wallet.innerHTML=sum;
 localStorage.setItem("amount", JSON.stringify(sum));

}