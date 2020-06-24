const myForm = document.getElementById('info-form');

myForm.addEventListener("submit", calcFinance);


function calcFinance(e){
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const term = document.getElementById('term').value;
    const interest = document.getElementById('interest').value;
    const deposit = document.getElementById('deposit').value;

        //checks if the amount entered is correct/valid and if it isn't, it lets the user know
    if (amount <= 0 || term <= 0 || interest < 0 || deposit < 0){
        document.getElementById('result-id').style.visibility = 'visible';
        document.getElementById('answer').textContent = 'Please enter valid information';
    } else {
        //calculates amount of interest
        let interestPay = (amount-deposit)*(interest/100);
        //calculates monthly payments
        let monthly = (amount-deposit+interestPay) / term;

        
        document.getElementById('result-id').style.visibility = 'visible';
        document.getElementById('answer').textContent = 'Result: £' + Math.round(monthly*10)/10 + "/month";
        document.getElementById('interest-paid').textContent = 'Total interest paid: £' + Math.round(interestPay*10)/10;
        }
}