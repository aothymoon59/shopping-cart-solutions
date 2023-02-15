function updatePhoneNumber(isIncrease) {
  let phoneNumberField = document.getElementById("phoneNumberField");
  let prevPhoneNumber = phoneNumberField.value;
  prevPhoneNumber = parseInt(prevPhoneNumber);
  let newPhoneNumber;
  if (isIncrease === true) {
    newPhoneNumber = prevPhoneNumber + 1;
  } else {
    newPhoneNumber = prevPhoneNumber - 1;
  }
  phoneNumberField.value = newPhoneNumber;
  return newPhoneNumber;
}

function updateTotalPhonePrice(newPhoneNumber) {
  let phoneTotalPrice = newPhoneNumber * 1219;
  let phoneTotalElement = document.getElementById("phoneTotal");
  phoneTotalElement.innerText = phoneTotalPrice;
}

document.getElementById("phoneBtnPlus").addEventListener("click", function () {
  let newPhoneNumber = updatePhoneNumber(true);
  updateTotalPhonePrice(newPhoneNumber);

  disableBtnZero(newPhoneNumber, "phoneBtnMinus");
  calculateSubTotal();
});
document.getElementById("phoneBtnMinus").addEventListener("click", function () {
  let newPhoneNumber = updatePhoneNumber(false);
  updateTotalPhonePrice(newPhoneNumber);

  disableBtnZero(newPhoneNumber, "phoneBtnMinus");
  calculateSubTotal();
});
