const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-btn");
const msg = document.querySelector("#error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes"); //array of html elements
const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validateAmount(){

    hideMessage();

    let cashGivenVal = Number(cashGiven.value);
    let billAmountVal = Number(billAmount.value);

    if(billAmountVal > 0) {
        if( cashGivenVal >= billAmountVal) {
            const amountToReturn = cashGivenVal - billAmountVal;
            calculateChange(amountToReturn);
        } else {
            showMessage("Cash given is less than bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amount) {
    for(let i=0;i<availableNotes.length;i++)
    {
       const numberOfNotes = Math.trunc(
            amount / availableNotes[i]
       ); 
       amount %= availableNotes[i];

       noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    msg.style.display = "none";
}

function showMessage(message) {
    msg.style.display = "block";
    msg.innerText = message;
}