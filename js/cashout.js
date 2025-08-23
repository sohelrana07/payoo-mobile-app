// cashOut section js
document.getElementById("btn-cash-out").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;
  const cashOut = parseInt(document.getElementById("cashout-money").value);
  const PinNumber = document.getElementById("pin-number").value;
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (agentNumber.length !== 11) {
    alert("Invalid agent number!");
    return;
  }
  if (cashOut < 100) {
    alert("Invalid Amount!");
    return;
  }
  if (PinNumber.length !== 4) {
    alert("Please provide 4 digit Pin!");
    return;
  }
  if (PinNumber == 2025) {
    const newAvailableBalance = availableBalance - cashOut;
    document.getElementById("available-balance").innerText =
      newAvailableBalance;
    document.getElementById("agent-number").value = "";
    document.getElementById("cashout-money").value = "";
    document.getElementById("pin-number").value = "";
  } else {
    alert("Invalid Pin!");
  }
});
