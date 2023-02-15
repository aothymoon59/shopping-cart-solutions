function getTextElementById(elementId) {
  let totalElement = document.getElementById(elementId);
  let currentTotal = totalElement.innerText;
  currentTotal = parseInt(currentTotal);
  return currentTotal;
}

function setTextElementValueById(id, value) {
  let element = document.getElementById(id);
  element.innerText = value;
}

function calculateSubTotal() {
  // Calculate sub total
  let currentPhoneTotal = getTextElementById("phoneTotal");
  let currentCaseTotal = getTextElementById("caseTotal");
  let currentSubTotal = currentPhoneTotal + currentCaseTotal;

  setTextElementValueById("subTotal", currentSubTotal);

  //   calculate tax
  let taxAmount = (currentSubTotal * 0.12).toFixed(2);
  taxAmount = parseFloat(taxAmount);
  setTextElementValueById("taxAmount", taxAmount);
  //   final amount
  let finalAmount = currentSubTotal + taxAmount;
  finalAmount = parseFloat(finalAmount).toFixed(2);
  setTextElementValueById("finalTotal", finalAmount);
}

function disableBtnZero(number, id) {
  if (number <= 0) {
    document.getElementById(id).setAttribute("disabled", true);
  } else {
    document.getElementById(id).removeAttribute("disabled");
  }
}
