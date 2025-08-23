document.getElementById("login-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 17061541990;
  const Pin = 2025;
  const inputNumber = document.getElementById("input-number");
  const inputPin = document.getElementById("input-pin");

  const inputValue = parseInt(inputNumber.value);
  const inputPinValue = parseInt(inputPin.value);

  if (inputNumber.value.length !== 11) {
    alert("Invalid Number!");
    return;
  }
  if (inputPin.value.length !== 4) {
    alert("Please provide 4 digit Pin!");
    return;
  }
  if (inputValue === mobileNumber && inputPinValue === Pin) {
    window.location.href = "./home.html";
    inputNumber.value = "";
    inputPin.value = "";
  } else {
    alert("Invalid Credentials! Please provide valid information");
    inputNumber.value = "";
    inputPin.value = "";
  }
});
