function calcFinance(amount, term, interest, deposit){

    interestPay = (amount-deposit)*(interest/100);
    monthly = (amount-deposit+interestPay) / term;
    return monthly;
}

console.log(monthly);