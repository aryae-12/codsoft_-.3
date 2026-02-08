let display = document.getElementById("display");

function appendValue(value) {
  display.classList.remove("result");
  display.value += value;
}


function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
    display.classList.add("result", "blink");

    setTimeout(() => {
      display.classList.remove("blink");
    }, 1000);
  } catch {
    display.value = "Error";
  }
}

