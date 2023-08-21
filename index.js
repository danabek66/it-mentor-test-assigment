let displayValue = "";

function appendToDisplay(value) {
  console.log("display", displayValue);
  displayValue += value;
  console.log(value);
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}

function calculate() {
  console.log(displayValue);
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}