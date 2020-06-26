const myForm = document.getElementById('info-form');

myForm.addEventListener("submit", calcFinance);


function calcFinance(e){
    e.preventDefault();

    const amount = document.getElementById('amount').value;
    const term = document.getElementById('term').value;
    //const interest = document.getElementById('interest').value;
    const interest = document.getElementById('interest');
    const deposit = document.getElementById('deposit').value;

        //checks if the amount entered is correct/valid and if it isn't, it lets the user know
    if (amount <= 0 || term <= 0 || interest < 0 || deposit < 0){
        document.getElementById('result-id').style.visibility = 'visible';
        document.getElementById('answer').textContent = 'Please enter valid information';
    } else {
        //calculates amount of interest
        //let interestPay = (interest/term) * (amount-deposit);
        let interestPay = parseFloat(interest.value) / 100 / 12;
        let power = Math.pow(1 + interestPay, term);
        //calculates monthly payments
        //let monthly = (amount-deposit+interestPay) / term;
        let monthly = ((amount-deposit)*power*interestPay)/(power-1);

        
        document.getElementById('result-id').style.visibility = 'visible';
        document.getElementById('answer').textContent = 'Result: £' + ((monthly*100)/100).toFixed(2) + "/month";
        document.getElementById('interest-paid').textContent = 'Total interest paid: £' + ((monthly*term)-(amount-deposit)).toFixed(2);
        }
}