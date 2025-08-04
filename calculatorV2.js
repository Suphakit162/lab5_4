let historyStack = [];

function append(character) {
  const display = document.getElementById("display");
  historyStack.push(historyStack.value);
  display.value += character;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  historyStack = [];
}

function calculate() {
  try {
    const display = document.getElementById("display");
    historyStack.push(display.value);
    display.value = eval(display.value);
  } catch (error) {
    alert("Invalid input");
  }
}


function Undo(){
    const display = document.getElementById("display");
    if (historyStack.lastIndexOf() !== -1){
        display.value = historyStack.pop();
    }
  }

