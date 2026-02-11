let expression = "";
let memory = 0;
let lastNumber = "";

const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let value = e.target.textContent.trim();

    // Numbers
    if (!isNaN(value) || value === '.') {
      lastNumber += value;
      expression += value;
      display.value = expression;
    }

    // Operators
    else if (['+', '-', '*', '/', '%'].includes(value)) {
      lastNumber = "";
      expression += value;
      display.value = expression;
    }

    // =
    else if (value === '=') {
      expression = eval(expression).toString();
      display.value = expression;
    }

    // C
    else if (value === 'C') {
      expression = "";
      lastNumber = "";
      display.value = "";
    }

    // M+
    else if (value === 'M+') {
      if (memory === 0) {
        memory = parseFloat(display.value) || 0;
      } else {
        memory += parseFloat(lastNumber) || 0;
      }
      display.value = memory;
      expression = memory.toString();
    }

    // M-
    else if (value === 'M-') {
      memory -= parseFloat(lastNumber) || 0;
      display.value = memory;
      expression = memory.toString();
    }
  });
});



