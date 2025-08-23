// function to get input value...(reusability-function)
function getInputValueNumber(id) {
  const inputValueNumber = parseInt(document.getElementById(id).value);
  return inputValueNumber;
}

// function get input value return...(reusability-function)
function getInputValue(value) {
  const inputValue = document.getElementById(value).value;
  return inputValue;
}

// addMoney section js
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const selectBank = getInputValue("select-bank");
    const bankAcc = getInputValue("bank-acc");
    const addMoney = getInputValueNumber("add-money");
    const inputPin = document.getElementById("input-pin").value;
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (bankAcc.length !== 11) {
      alert("Invalid account number!");
      return;
    }
    if (addMoney < 100) {
      alert("Invalid Amount!");
      return;
    }
    if (inputPin.length !== 4) {
      alert("Please provide 4 digit pin");
      return;
    }
    if (inputPin == 2025) {
      const newAvailableBalance = availableBalance + addMoney;
      document.getElementById("available-balance").innerText =
        newAvailableBalance;
      document.getElementById("add-money").value = "";
      document.getElementById("input-pin").value = "";
      document.getElementById("bank-acc").value = "";
    } else {
      alert("Invalid Pin!");
    }
  });

// Toggling feature section start here
// step 01
document.getElementById("addMoney-btn").addEventListener("click", function () {
  const cashOuT = document.getElementById("casH-out");
  cashOuT.style.display = "none";
  document.getElementById("add-Money").style.display = "block";
});

// step 02
document.getElementById("cashOut-btn").addEventListener("click", function () {
  const addMoneY = document.getElementById("add-Money");
  addMoneY.style.display = "none";
  document.getElementById("casH-out").style.display = "block";
});
