function append(character) {
  document.getElementById("display").value += character;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = 
      eval(document.getElementById("display").value);
  } catch (error) {
    alert("Invalid input");
    
  }
}
