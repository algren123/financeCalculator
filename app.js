const myForm = document.getElementById('info-form');

myForm.addEventListener("submit", calcFinance);

function calcFinance(e){
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const term = document.getElementById('term').value;
    const interest = document.getElementById('interest').value;
    const deposit = document.getElementById('deposit').value;

    let interestPay = (amount-deposit)*(interest/100);
    let monthly = (amount-deposit+interestPay) / term;
    
    document.getElementById('answer').textContent = monthly;
}