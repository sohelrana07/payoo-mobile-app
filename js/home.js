const transactionData = [];

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

// function get input innerText return...(reusability-function)
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
  return availableBalanceElement;
}

// Toggle-section Reusability function....
function toggLing(id) {
  const toggles = document.getElementsByClassName("toggling");
  for (const toggle of toggles) {
    toggle.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
  return;
}

// function to Toggle button border
function toggleBtnBorder(id) {
  const boxColor = document.getElementsByClassName("box-Color");
  for (const coloR of boxColor) {
    coloR.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    coloR.classList.add("border-gray-200");
  }
  document.getElementById(id).classList.remove("border-gray-200");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Log out section handler
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "./index.html";
});

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
    if (isNaN(addMoney) || addMoney <= 0) {
      alert("Invalid Amount!");
      return;
    }
    if (inputPin.length !== 4) {
      alert("Please provide 4 digit pin");
      return;
    }
    if (inputPin == 2025) {
      const newAvailableBalance = availableBalance + addMoney;
      setInnerText(newAvailableBalance);
      document.getElementById("add-money").value = "";
      document.getElementById("input-pin").value = "";
      document.getElementById("bank-acc").value = "";
      // data store....
      const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      };

      transactionData.push(data);
    } else {
      alert("Invalid Pin!");
    }
  });

// cashOut section js
document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValue("agent-number");
  const cashOut = getInputValueNumber("cashout-money");
  const PinNumber = getInputValue("pin-number");
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length !== 11) {
    alert("Invalid agent number!");
    return;
  }
  if (isNaN(cashOut) || cashOut <= 0 || cashOut >= 45000) {
    alert("Invalid Amount!");
    return;
  }
  if (PinNumber.length !== 4) {
    alert("Please provide 4 digit Pin!");
    return;
  }
  if (PinNumber == 2025) {
    const newAvailableBalance = availableBalance - cashOut;
    setInnerText(newAvailableBalance);
    document.getElementById("agent-number").value = "";
    document.getElementById("cashout-money").value = "";
    document.getElementById("pin-number").value = "";
    // data store....
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    };

    transactionData.push(data);
  } else {
    alert("Invalid Pin!");
  }
});

// Transfer section js
document
  .getElementById("btn-transfer-money")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const accountNumber = getInputValue("bank-account");
    const transferMoney = getInputValueNumber("transfer-money");
    const transferPin = getInputValue("transfer-Pin");
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length !== 11) {
      alert("Invalid account number!");
      return;
    }
    if (isNaN(transferMoney) || transferMoney <= 0 || transferMoney >= 45000) {
      alert("Invalid Amount!");
      return;
    }
    if (transferPin.length !== 4) {
      alert("Please provide 4 digit Pin!");
      return;
    }
    if (transferPin == 2025) {
      const newAvailableBalance = availableBalance - transferMoney;
      setInnerText(newAvailableBalance);
      document.getElementById("bank-account").value = "";
      document.getElementById("transfer-money").value = "";
      document.getElementById("transfer-Pin").value = "";
      // data store....
      const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      };

      transactionData.push(data);
    } else {
      alert("Invalid Pin!");
    }
  });

// getBonus section js
document
  .getElementById("btn-get-bonus")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const BonusCoupon = getInputValue("get-coupon-bonus");
    const bonusCoupon = getInputValueNumber("get-coupon-bonus");
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (BonusCoupon.length !== 4) {
      alert("Please provide 4 digit coupon!");
      return;
    }
    if (isNaN(bonusCoupon) || bonusCoupon !== 2030) {
      alert("Invalid Coupon!");
      return;
    }
    const newAvailableBalance = availableBalance + 2000;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
    document.getElementById("get-coupon-bonus").value = "";
    // data store....
    const data = {
      name: "Bonus Added",
      date: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    };

    transactionData.push(data);
  });

// payBill section js
document.getElementById("btn-pay-bill").addEventListener("click", function (e) {
  e.preventDefault();

  const billerAcc = getInputValue("Bank-acc");
  const payBill = getInputValueNumber("pay-amount");
  const billPinNumber = getInputValue("bill-pin");
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (billerAcc.length !== 11) {
    alert("Invalid account number!");
    return;
  }
  if (isNaN(payBill) || payBill <= 0 || payBill >= 45000) {
    alert("Invalid Amount!");
    return;
  }
  if (billPinNumber.length !== 4) {
    alert("Please provide 4 digit Pin!");
    return;
  }
  if (billPinNumber == 2025) {
    const newAvailableBalance = availableBalance - payBill;
    setInnerText(newAvailableBalance);
    document.getElementById("Bank-acc").value = "";
    document.getElementById("pay-amount").value = "";
    document.getElementById("bill-pin").value = "";
    // data store....
    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    };

    transactionData.push(data);
  } else {
    alert("Invalid Pin!");
  }
});

// transaction section js
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById(
      "transaction-container"
    );

    transactionContainer.innerText = "";

    for (const data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `
              <div
          class="border border-[#fca6a61a] hover:scale-x-105 shadow-sm shadow-[#0808081A] flex justify-between items-center bg-white rounded-2xl py-4 px-5 mb-3"
        >
          <!-- left side  -->
          <div class="flex items-center gap-3">
            <figure class="bg-[#0808080d] p-2.5 rounded-full">
              <img src="assets/purse1.png" alt="" />
            </figure>
            <div>
              <h1 class="text-[#080808b3] font-semibold">${data.name}</h1>
              <h3 class="text-[#080808b3] text-xs">${data.date}</h3>
            </div>
          </div>
          <!-- right side -->
          <span>
            <i class="fa-solid fa-ellipsis-vertical text-xl"></i>
          </span>
        </div>
      `;

      transactionContainer.appendChild(div);
    }
  });

// Toggling feature section start here
// step 01
document.getElementById("addMoney-btn").addEventListener("click", function () {
  toggLing("add-Money");
  toggleBtnBorder("addMoney-btn");
});

// step 02
document.getElementById("cashOut-btn").addEventListener("click", function () {
  toggLing("casH-out");
  toggleBtnBorder("cashOut-btn");
});

// step 03
document.getElementById("transfer-btn").addEventListener("click", function () {
  toggLing("transfer-Money");
  toggleBtnBorder("transfer-btn");
});

// step 04
document.getElementById("get-bonus-btn").addEventListener("click", function () {
  toggLing("get-bonus");
  toggleBtnBorder("get-bonus-btn");
});

// step 05
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  toggLing("pay-bill");
  toggleBtnBorder("pay-bill-btn");
});

// step 06
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    toggLing("transaction");
    toggleBtnBorder("transactions-btn");
  });
