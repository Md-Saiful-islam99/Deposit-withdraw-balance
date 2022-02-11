
document.getElementById('deposit-button').addEventListener
// get the amount deposited
('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    
    depositTotal.innerText = newDepositTotal;


    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBlanaceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBlanaceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;


    // clear the deposit input field 

    depositInput.value = '';

});


 //withdraw

document.getElementById('withdraw-button').addEventListener('click', function () {
const withdrawInput = document.getElementById('withdraw-input');
const newWithdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountText);

const withdrawTotal = document.getElementById('withdraw-total');

const previousWithdrawAmountText = withdrawTotal.innerText;
const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
const newWithdrawAmountTotal = previousWithdrawAmount + newWithdrawAmount;

withdrawTotal.innerText = newWithdrawAmountTotal;




// update balance after withdraw
const balanceTotal = document.getElementById('balance-total');
const previousBalanceTotalText = balanceTotal.innerText;
const previousBlanaceTotal = parseFloat(previousBalanceTotalText);
const newBalanceTotal = previousBlanaceTotal - newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;


withdrawInput.value = '';

});