// FORM submit
function submitName() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("formResult").textContent = "Hello " + name;
}

// show simple text
function showText() {
  document.getElementById("result").textContent = "Hello from JavaScript";
}

// simple math
function doMath() {
  let a = 5;
  let b = 10;
  let sum = a + b;
  document.getElementById("result").textContent = "Sum is: " + sum;
}

// change text
function changeText() {
  document.getElementById("result").textContent = "Text changed!";
}