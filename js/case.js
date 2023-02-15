/*
1. add a event listener to case plus btn
2. grt the value inside the case number input field
3. convert the number to an integer
4. calculate the new case  number
5. set the value to case number field 
 */

function updateCaseNumber(isIncrease) {
  let caseNumberField = document.getElementById("caseNumberField");
  let prevCaseNumber = caseNumberField.value;
  prevCaseNumber = parseInt(prevCaseNumber);
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = prevCaseNumber + 1;
  } else {
    newCaseNumber = prevCaseNumber - 1;
  }
  caseNumberField.value = newCaseNumber;

  return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
  let totalCasePrice = newCaseNumber * 59;

  let caseTotalElement = document.getElementById("caseTotal");
  caseTotalElement.innerText = totalCasePrice;
}

document.getElementById("caseBtnPlus").addEventListener("click", function () {
  let newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);

  disableBtnZero(newCaseNumber, "caseBtnMinus");

  calculateSubTotal();
});
document.getElementById("caseBtnMinus").addEventListener("click", function () {
  let newCaseNumber = updateCaseNumber(false);
  disableBtnZero(newCaseNumber, "caseBtnMinus");
  updateCaseTotalPrice(newCaseNumber);

  calculateSubTotal();
});
